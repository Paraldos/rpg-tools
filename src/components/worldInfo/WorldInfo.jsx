import "./worldInfo.css";
import { useSectorStore } from "../../utils/store";
import XBtn from "../xBtn/XBtn";
import {
  WORLD_TYPES,
  SOCIETY_TAGS,
  GENERAL_TAGS,
} from "../../sector/worldTags";
import { SvgPlus } from "../../utils/svgs";

export default function WorldInfo() {
  const sector = useSectorStore((s) => s.sector);
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const setSelectedFieldIndex = useSectorStore((s) => s.setSelectedFieldIndex);
  const addWorldTag = useSectorStore((s) => s.addWorldTag);
  const updateWorldTags = useSectorStore((s) => s.updateWorldTags);
  if (!selectedWorldIndex) return null;

  const selectedField = sector.fields[selectedWorldIndex[0]];
  const selectedWorld = selectedField.worlds[selectedWorldIndex[1]];
  const tags = selectedWorld.tags;

  const selectedType = tags.find((tag) => WORLD_TYPES.includes(tag)) ?? "";

  const onChangeHandler = (tagIndex, event) => {
    tags[tagIndex] = event.target.value;
    updateWorldTags(tags);
  };

  const worldTypeTag = (
    <select value={selectedType} onChange={(e) => onChangeHandler(0, e)}>
      {WORLD_TYPES.map((worldType) => (
        <option key={worldType} value={worldType}>
          {worldType}
        </option>
      ))}
    </select>
  );

  const societyTypeTag = (
    <select value={selectedType} onChange={(e) => onChangeHandler(1, e)}>
      {SOCIETY_TAGS.map((societyType) => (
        <option key={societyType} value={societyType}>
          {societyType}
        </option>
      ))}
    </select>
  );

  const generalTag = (tag, index) => (
    <select value={tag} onChange={(e) => onChangeHandler(index, e)}>
      {GENERAL_TAGS.map((generalTag) => (
        <option key={generalTag} value={generalTag}>
          {generalTag}
        </option>
      ))}
    </select>
  );

  const getTagInputField = (tag, index) => {
    if (index == 0) return worldTypeTag;
    if (index == 1) return societyTypeTag;
    return generalTag(tag, index);
  };

  const plusBtn = (
    <li>
      <button onClick={addWorldTag}>
        <SvgPlus />
      </button>
    </li>
  );

  return (
    <div className="worldInfo">
      <XBtn onClick={() => setSelectedFieldIndex(selectedWorldIndex[0])} />
      <p className="worldInfo__baseInfo">
        Feld: {selectedField.index + 1}, Typ: {selectedField.type}
      </p>
      <h1>
        {selectedField.title} {selectedWorld.titleNumber}
      </h1>
      <ul className="worldInfo__tags">
        {selectedWorld.tags.map((tag, index) => (
          <li key={index}>{getTagInputField(tag, index)}</li>
        ))}
        {plusBtn}
      </ul>
    </div>
  );
}

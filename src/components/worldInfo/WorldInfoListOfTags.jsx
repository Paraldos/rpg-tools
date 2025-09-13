import { useSectorStore } from "../../utils/store";
import { SvgX } from "../svgs/Svgs";
import { removeWorldTag, updateWorldTags } from "../../utils/worldHelper";

export default function WorldInfoListOfTags() {
  const sector = useSectorStore((s) => s.sector);
  const worldTypeTags = useSectorStore((s) => s.worldTypeTags);
  const worldSocietyTags = useSectorStore((s) => s.worldSocietyTags);
  const worldGeneralTags = useSectorStore((s) => s.worldGeneralTags);
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const selectedField = sector.fields[selectedWorldIndex[0]];
  const selectedWorld = selectedField.worlds[selectedWorldIndex[1]];
  const tags = selectedWorld.tags;

  const onChangeHandler = (tagIndex, event) => {
    const value = event.target.value;
    const copyOfTags = [...tags];
    copyOfTags[tagIndex] = value;
    updateWorldTags(copyOfTags);
  };

  const options = (listOfTags) => {
    listOfTags.sort();
    return listOfTags.map((tag) => (
      <option key={tag} value={tag}>
        {tag}
      </option>
    ));
  };

  const worldTypeTag = (
    <div className="worldInfo__tagWrapper">
      <select value={tags[0]} onChange={(e) => onChangeHandler(0, e)}>
        {options(worldTypeTags)}
      </select>
    </div>
  );

  const societyTypeTag = (
    <div className="worldInfo__tagWrapper">
      <select value={tags[1]} onChange={(e) => onChangeHandler(1, e)}>
        {options(worldSocietyTags)}
      </select>
    </div>
  );

  const generalTag = (tag, index) => (
    <div className="worldInfo__tagWrapper">
      <select value={tag} onChange={(e) => onChangeHandler(index, e)}>
        {options(worldGeneralTags)}
      </select>
      <button onClick={() => removeWorldTag(index)}>
        <SvgX />
      </button>
    </div>
  );

  const getTagInputField = (tag, index) => {
    if (index == 0) return worldTypeTag;
    if (index == 1) return societyTypeTag;
    return generalTag(tag, index);
  };

  return (
    <ul className="worldInfo__listOfTags">
      {selectedWorld.tags.map((tag, index) => (
        <li key={index}>{getTagInputField(tag, index)}</li>
      ))}
    </ul>
  );
}

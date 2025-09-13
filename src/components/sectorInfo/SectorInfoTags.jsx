import { useSectorStore } from "../../utils/store";
import { SvgX } from "../svgs/Svgs";
import { removeSectorTag, updateSectorTags } from "../../utils/sectorHelper";

export default function SectorInfoTags() {
  const sector = useSectorStore((s) => s.sector);
  const sectorTags = useSectorStore((s) => s.sectorTags);

  const onChangeHandler = (tagIndex, event) => {
    const value = event.target.value;
    const newTags = [...sector.tags];
    newTags[tagIndex] = value;
    updateSectorTags(newTags);
  };

  const select = (selectedTag, index) => {
    sectorTags.sort();

    return (
      <select value={selectedTag} onChange={(e) => onChangeHandler(index, e)}>
        {sectorTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    );
  };

  const listItem = (selectedTag, index) => {
    return (
      <li key={index}>
        {select(selectedTag, index)}
        <button onClick={() => removeSectorTag(index)}>
          <SvgX />
        </button>
      </li>
    );
  };

  return (
    <ul className="sectorInfo__tags">
      {sector.tags.map((tag, index) => listItem(tag, index))}
    </ul>
  );
}

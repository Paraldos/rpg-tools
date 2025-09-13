import { useSectorStore } from "../../utils/store";
import { SvgX } from "../svgs/Svgs";
import { removeWorldTag } from "../../utils/sectorHelper";

export default function SectorInfoTags() {
  const sector = useSectorStore((s) => s.sector);
  const sectorTags = useSectorStore((s) => s.sectorTags);

  const select = (selectedTag) => {
    sectorTags.sort();

    return (
      <select value={selectedTag}>
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
        {select(selectedTag)}
        <button onClick={() => removeWorldTag(index)}>
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

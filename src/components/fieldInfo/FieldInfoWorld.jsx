import { useSectorStore } from "../../utils/store";
import { SvgChevronVertical } from "../svgs/Svgs";

export default function fieldInfoWorld({ worldIndex }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const setSelectedWorldIndex = useSectorStore((s) => s.setSelectedWorldIndex);
  const selectedField = sector.fields[selectedFieldIndex];
  const world = selectedField.worlds?.[worldIndex];

  const moveBtn = (
    <button className="fieldInfoWorld__moveBtn symbolBtn">
      <SvgChevronVertical />
    </button>
  );

  if (!world)
    return (
      <li key={selectedFieldIndex} className="fieldInfoWorld">
        <p>Leere</p>
      </li>
    );

  const tags = world.tags.map((tag, index) => (
    <li key={index} className={`fieldInfoWorld__tag`}>
      {tag}
    </li>
  ));

  const worldTitle = world.title
    ? world.title
    : `${selectedField.title} ${worldIndex + 1}`;

  return (
    <li key={selectedFieldIndex} className="fieldInfoWorld">
      <button
        className="fieldInfoWorld__mainBtn"
        onClick={() => setSelectedWorldIndex([selectedFieldIndex, worldIndex])}
      >
        <h4 className="fieldInfoWorld__title">{worldTitle}</h4>
        <ul className="fieldInfoWorld__tags">{tags}</ul>
      </button>
      {moveBtn}
    </li>
  );
}

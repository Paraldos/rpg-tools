import "./worldInfoBtn.css";
import { useSectorStore } from "../../utils/store";

export default function WorldInfoBtn({ worldIndex }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const setSelectedWorldIndex = useSectorStore((s) => s.setSelectedWorldIndex);

  if (!sector || selectedFieldIndex == null) return null;

  const selectedField = sector.fields[selectedFieldIndex];
  const world = selectedField.worlds?.[worldIndex];

  if (!world) return null;

  const tags = world.tags.map((tag, index) => (
    <li key={index} className={`worldInfoBtn__tag`}>
      {tag}
    </li>
  ));

  const worldTitle = world.title
    ? world.title
    : `${selectedField.title} ${worldIndex + 1}`;

  return (
    <li key={selectedFieldIndex} className="worldInfoBtn">
      <button
        className="WorldInfoBtn__mainBtn"
        onClick={() => setSelectedWorldIndex([selectedFieldIndex, worldIndex])}
      >
        <p className="worldInfoBtn__title">{worldTitle}</p>
        <ul className="worldInfoBtn__tags">{tags}</ul>
      </button>
    </li>
  );
}

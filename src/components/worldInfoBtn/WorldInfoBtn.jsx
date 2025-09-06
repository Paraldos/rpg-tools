import "./worldInfoBtn.css";
import { useSectorStore } from "../../utils/store";

export default function WorldInfoBtn({ worldIndex }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);

  if (!sector || selectedFieldIndex == null) return null;

  const selectedField = sector.fields[selectedFieldIndex];
  const world = selectedField.worlds?.[worldIndex];

  if (!world) return null;

  const tags = world.tags.map((tag) => (
    <li className={`worldInfoBtn__tag`}>{tag}</li>
  ));

  return (
    <li key={selectedFieldIndex} className="WorldInfoBtn btn">
      <p className="worldInfoBtn__title">
        {selectedField.title} {world.titleNumber}
      </p>
      <ul className="worldInfoBtn__tags">{tags}</ul>
    </li>
  );
}

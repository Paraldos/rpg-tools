import "./worldInfo.css";
import { useSectorStore } from "../../utils/store";

export default function WorldInfo({ worldIndex }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);

  if (!sector || selectedFieldIndex == null) return null;

  const selectedField = sector.fields[selectedFieldIndex];
  const world = selectedField.worlds?.[worldIndex];

  if (!world) return null;

  const tags = world.tags.map((tag) => (
    <li className={`worldInfo__tag`}>{tag}</li>
  ));

  return (
    <li key={selectedFieldIndex} className="worldInfo btn">
      <p className="worldInfo__title">
        {selectedField.title} {world.titleNumber}
      </p>
      <ul className="worldInfo__tags">{tags}</ul>
    </li>
  );
}

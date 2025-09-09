import { useSectorStore } from "../../utils/store";

export default function FieldInfoWorldBtn({ worldIndex }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const setSelectedWorldIndex = useSectorStore((s) => s.setSelectedWorldIndex);

  if (!sector || selectedFieldIndex == null) return null;

  const selectedField = sector.fields[selectedFieldIndex];
  const world = selectedField.worlds?.[worldIndex];

  if (!world) return null;

  const tags = world.tags.map((tag, index) => (
    <li key={index} className={`fieldInfoWorldBtn__tag`}>
      {tag}
    </li>
  ));

  const worldTitle = world.title
    ? world.title
    : `${selectedField.title} ${worldIndex + 1}`;

  return (
    <li key={selectedFieldIndex} className="fieldInfoWorldBtn">
      <button
        className="fieldInfoWorldBtn__mainBtn"
        onClick={() => setSelectedWorldIndex([selectedFieldIndex, worldIndex])}
      >
        <h4 className="fieldInfoWorldBtn__title">{worldTitle}</h4>
        <ul className="fieldInfoWorldBtn__tags">{tags}</ul>
      </button>
    </li>
  );
}

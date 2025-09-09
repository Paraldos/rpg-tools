import { useSectorStore } from "../../utils/store";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function FieldInfoWorld({ worldIndex, id }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const setSelectedWorldIndex = useSectorStore((s) => s.setSelectedWorldIndex);
  const selectedField = sector.fields[selectedFieldIndex];
  const world = selectedField.worlds?.[worldIndex];

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    touchAction: "none",
    willChange: "transform",
    opacity: isDragging ? 0.9 : 1,
    zIndex: isDragging ? 5 : "auto",
  };

  if (world.title === "Leere")
    return (
      <li
        className="fieldInfoWorld"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <p>-</p>
      </li>
    );

  const tags = world.tags.map((tag, index) => (
    <li key={index} className="fieldInfoWorld__tag">
      {tag}
    </li>
  ));

  const worldTitle = world.title
    ? world.title
    : `${selectedField.title} ${worldIndex + 1}`;

  return (
    <li
      className="fieldInfoWorld"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <button
        className="fieldInfoWorld__mainBtn"
        onClick={() => setSelectedWorldIndex([selectedFieldIndex, worldIndex])}
      >
        <h4 className="fieldInfoWorld__title">{worldTitle}</h4>
        <ul className="fieldInfoWorld__tags">{tags}</ul>
      </button>
    </li>
  );
}

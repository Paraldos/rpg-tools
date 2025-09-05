import "./worldBtn.css";
import { SvgChevronRight } from "../../../utils/svgs";
import { useSectorStore } from "../../../store";

export default function WorldBtn({
  fieldIndex,
  worldIndex,
  world,
  onOpenWorldInfo,
}) {
  return (
    <button
      key={fieldIndex}
      className="worldBtn"
      onClick={() => onOpenWorldInfo(fieldIndex, worldIndex)}
    >
      <b>{world.name}</b> ({world.tags.join(", ")})
      <SvgChevronRight />
    </button>
  );
}

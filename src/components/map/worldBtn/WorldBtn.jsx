import "./worldBtn.css";
import { ChevronRight } from "../../../utils/svgs";

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
      <ChevronRight />
    </button>
  );
}

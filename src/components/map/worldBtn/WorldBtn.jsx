import "./worldBtn.css";
import { SvgChevronRight } from "../../../utils/svgs";
import { useSectorStore } from "../../../utils/store";

export default function WorldBtn({ worldIndex }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const setSelectedWorldIndex = useSectorStore((s) => s.setSelectedWorldIndex);
  const resetSelection = useSectorStore((s) => s.resetSelection);

  if (!sector || selectedFieldIndex == null) return null;

  const selectedField = sector.fields[selectedFieldIndex];
  const world = selectedField.worlds?.[worldIndex];
  if (!world) return null;

  const handelClick = () => {
    resetSelection();
    setSelectedWorldIndex([selectedFieldIndex, worldIndex]);
  };

  return (
    <button key={selectedFieldIndex} className="worldBtn" onClick={handelClick}>
      <p className="worldBtn__title">{world.name}</p>
      <p>({world.tags.join(", ")})</p>
      <SvgChevronRight />
    </button>
  );
}

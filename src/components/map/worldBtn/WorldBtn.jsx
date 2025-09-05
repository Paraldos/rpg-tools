import "./worldBtn.css";
import { SvgChevronRight } from "../../../utils/svgs";
import { useSectorStore } from "../../../utils/store";

export default function WorldBtn({ worldIndex }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);

  if (!sector || selectedFieldIndex == null) return null;

  const selectedField = sector.fields[selectedFieldIndex];
  const world = selectedField.worlds?.[worldIndex];
  if (!world) return null;

  const handelClick = () => {
    console.log("click!");
  };

  return (
    <button key={selectedFieldIndex} className="worldBtn" onClick={handelClick}>
      <p className="worldBtn__title">{world.name}</p>
      <p>({world.tags.join(", ")})</p>
      <SvgChevronRight />
    </button>
  );
}

import "./changeFieldType.css";
import { SvgBlackHole, SvgStar } from "../../../utils/svgs";
import { useSectorStore } from "../../../utils/store";

export default function ChangeFieldType() {
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const changeFieldType = useSectorStore((s) => s.changeFieldType);

  if (selectedFieldIndex == null) return null;

  return (
    <div className="changeFieldType">
      <p>Umwandeln</p>
      <button
        onClick={() => changeFieldType(selectedFieldIndex, "Schwarzes Loch")}
      >
        <SvgBlackHole />
      </button>
      <button onClick={() => changeFieldType(selectedFieldIndex, "Stern")}>
        <SvgStar />
      </button>
      <button
        onClick={() => changeFieldType(selectedFieldIndex, "Leere")}
      ></button>
    </div>
  );
}

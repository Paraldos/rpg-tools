import { SvgBlackHole, SvgStar } from "../../utils/svgs";
import { useSectorStore } from "../../utils/store";

export default function FieldInfoChangeFieldType() {
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const changeFieldType = useSectorStore((s) => s.changeFieldType);

  if (selectedFieldIndex == null) return null;

  return (
    <div className="fieldInfo__changeFieldType">
      <p>Umwandeln</p>
      <button
        className="symbolBtn"
        onClick={() => changeFieldType(selectedFieldIndex, "Schwarzes Loch")}
      >
        <SvgBlackHole />
      </button>
      <button
        className="symbolBtn"
        onClick={() => changeFieldType(selectedFieldIndex, "Stern")}
      >
        <SvgStar />
      </button>
      <button
        className="symbolBtn"
        onClick={() => changeFieldType(selectedFieldIndex, "Leere")}
      ></button>
    </div>
  );
}

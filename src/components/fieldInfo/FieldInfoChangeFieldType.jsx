import { SvgBlackHole, SvgStar } from "../svgs/Svgs";
import { useSectorStore } from "../../utils/store";
import { changeFieldType } from "../../utils/fieldHelper";

export default function FieldInfoChangeFieldType() {
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);

  if (selectedFieldIndex == null) return null;

  return (
    <div className="fieldInfo__changeFieldType">
      <p>Umwandeln</p>
      <button
        className="symbolBtn"
        onClick={() => changeFieldType("Schwarzes Loch")}
      >
        <SvgBlackHole />
      </button>
      <button className="symbolBtn" onClick={() => changeFieldType("Stern")}>
        <SvgStar />
      </button>
      <button
        className="symbolBtn"
        onClick={() => changeFieldType("Leere")}
      ></button>
    </div>
  );
}

import "./changeFieldType.css";
import { BlackHole, Star } from "../../../utils/svgs";

export default function ChangeFieldType({ fieldIndex, onChangeType }) {
  return (
    <div className="changeFieldType">
      <p>Umwandeln</p>
      <button onClick={() => onChangeType(fieldIndex, "Schwarzes Loch")}>
        <BlackHole />
      </button>
      <button onClick={() => onChangeType(fieldIndex, "Stern")}>
        <Star />
      </button>
      <button onClick={() => onChangeType(fieldIndex, "Leere")}></button>
    </div>
  );
}

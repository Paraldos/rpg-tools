import "./changeFieldType.css";
import { BlackHole, Star } from "../../../utils/svgs";

export default function ChangeFieldType({ fieldIndex, onChangeFieldType }) {
  return (
    <div className="changeFieldType">
      <p>Umwandeln</p>
      <button onClick={() => onChangeFieldType(fieldIndex, "Schwarzes Loch")}>
        <BlackHole />
      </button>
      <button onClick={() => onChangeFieldType(fieldIndex, "Stern")}>
        <Star />
      </button>
      <button onClick={() => onChangeFieldType(fieldIndex, "Leere")}></button>
    </div>
  );
}

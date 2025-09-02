import "./changeFieldType.css";
import { BlackHole, Star } from "../../../utils/svgs";

export default function ChangeFieldType({ fieldIndex, onChangeType }) {
  return (
    <div className="changeFieldType">
      <p>Umwandeln</p>
      <button onClick={() => onChangeType(fieldIndex, "Black Hole")}>
        <BlackHole />
      </button>
      <button onClick={() => onChangeType(fieldIndex, "Star")}>
        <Star />
      </button>
      <button onClick={() => onChangeType(fieldIndex, "Empt")}></button>
    </div>
  );
}

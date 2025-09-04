// ChangeFieldType.jsx
import "./changeFieldType.css";
import { BlackHole, Star } from "../../../utils/svgs";
import { useSectorStore } from "../../../store";

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
        <BlackHole />
      </button>
      <button onClick={() => changeFieldType(selectedFieldIndex, "Stern")}>
        <Star />
      </button>
      <button
        onClick={() => changeFieldType(selectedFieldIndex, "Leere")}
      ></button>
    </div>
  );
}

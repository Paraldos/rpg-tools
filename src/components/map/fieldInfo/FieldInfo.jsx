import "./fieldInfo.css";
import ChangeFieldType from "../changeFieldType/ChangeFieldType";
import WorldBtn from "../worldBtn/WorldBtn";
import { useSectorStore } from "../../../utils/store";
import AddWorldBtn from "../addWorldBtn/AddWorldBtn";

export default function FieldInfo() {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const updateFieldTitle = useSectorStore((s) => s.updateFieldTitle);

  const selectedField =
    sector && selectedFieldIndex != null
      ? sector.fields[selectedFieldIndex]
      : null;

  if (!selectedField) return null;

  let content = null;

  if (selectedField.type === "Schwarzes Loch") {
    content = (
      <input
        type="text"
        value={selectedField.title}
        aria-label="Name des Sterns"
        onChange={(e) => updateFieldTitle(selectedField.index, e.target.value)}
      />
    );
  }

  if (selectedField.type === "Stern") {
    content = (
      <>
        <input
          type="text"
          value={selectedField.title}
          aria-label="Name des Sterns"
          onChange={(e) =>
            updateFieldTitle(selectedField.index, e.target.value)
          }
        />
        {selectedField.worlds.map((world, index) => (
          <WorldBtn key={index} worldIndex={index} />
        ))}
        <div className="fieldInfo__add">
          <p>Hinzufügen</p>
          <AddWorldBtn />
        </div>
      </>
    );
  }

  return (
    <div className="fieldInfo">
      <p className="fieldInfo__baseInfo">
        Feld: {selectedField.index + 1}, Typ: {selectedField.type}
      </p>
      <div className="fieldInfo__content">{content}</div>
      <ChangeFieldType />
    </div>
  );
}

import "./fieldInfo.css";
import ChangeFieldType from "../changeFieldType/ChangeFieldType";
import WorldBtn from "../worldBtn/WorldBtn";
import { useSectorStore } from "../../../utils/store";
import AddWorldBtn from "../addWorldBtn/AddWorldBtn";

export default function FieldInfo({ onOpenWorldInfo }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const selectedField =
    sector && selectedFieldIndex != null
      ? sector.fields[selectedFieldIndex]
      : null;

  if (!selectedField) return null;

  let content = null;

  if (selectedField.type == "Schwarzes Loch") {
    content = <h3>{selectedField.title}</h3>;
  }

  if (selectedField.type == "Stern") {
    content = (
      <>
        <h3>{selectedField.title}</h3>
        {selectedField.worlds.map((world, index) => (
          <WorldBtn key={index} worldIndex={index} />
        ))}
        <div className="fieldInfo__addWorldBtn">
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

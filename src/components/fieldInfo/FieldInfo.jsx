import "./fieldInfo.css";
import WorldInfoBtn from "../worldInfoBtn/WorldInfoBtn";
import { useSectorStore } from "../../utils/store";
import FieldInfoTitle from "./FieldInfoTitle";
import FieldInfoAddWorld from "./FieldInfoAddWorld";
import FieldInfoChangeFieldType from "./FieldInfoChangeFieldType";

export default function FieldInfo() {
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const sector = useSectorStore((s) => s.sector);
  const saveMenuOpen = useSectorStore((s) => s.saveMenuOpen);

  if (!selectedFieldIndex || saveMenuOpen) return null;

  const selectedField = sector.fields[selectedFieldIndex];

  let content = null;
  if (selectedField.type === "Schwarzes Loch") content = <FieldInfoTitle />;
  if (selectedField.type === "Stern") {
    content = (
      <>
        <FieldInfoTitle />
        <ul className="fieldInfo__listOfWorlds">
          {selectedField.worlds.map((_world, index) => (
            <WorldInfoBtn key={index} worldIndex={index} />
          ))}
        </ul>
        <FieldInfoAddWorld />
      </>
    );
  }

  return (
    <div className="fieldInfo">
      <p className="fieldInfo__baseInfo">
        Feld: {selectedField.index + 1}, Typ: {selectedField.type}
      </p>
      <div className="fieldInfo__content">{content}</div>
      <FieldInfoChangeFieldType />
    </div>
  );
}

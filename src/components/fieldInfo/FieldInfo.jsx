import "./fieldInfo.css";
import ChangeFieldType from "../changeFieldType/ChangeFieldType";
import WorldInfoBtn from "../worldInfoBtn/WorldInfoBtn";
import { useSectorStore } from "../../utils/store";
import AddWorldBtn from "../addWorldBtn/AddWorldBtn";
import { SvgText } from "../../utils/svgs";

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

  const title = (
    <div className="fieldInfo__titleBox">
      <input
        className="fieldInfo__title"
        type="text"
        value={selectedField.title}
        aria-label="Name des Felds"
        onChange={(e) => updateFieldTitle(selectedField.index, e.target.value)}
      />
      <SvgText />
    </div>
  );

  if (selectedField.type === "Schwarzes Loch") {
    content = title;
  }

  if (selectedField.type === "Stern") {
    content = (
      <>
        {title}
        <ul className="fieldInfo__listOfWorlds">
          {selectedField.worlds.map((_world, index) => (
            <WorldInfoBtn key={index} worldIndex={index} />
          ))}
        </ul>
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

import "./fieldInfo.css";
import WorldInfoBtn from "../worldInfoBtn/WorldInfoBtn";
import { useSectorStore } from "../../utils/store";
import { SvgText } from "../../utils/svgs";

import FieldInfoAddWorld from "./FieldInfoAddWorld";
import FieldInfoChangeFieldType from "./FieldInfoChangeFieldType";

export default function FieldInfo() {
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const sector = useSectorStore((s) => s.sector);
  const updateFieldTitle = useSectorStore((s) => s.updateFieldTitle);

  if (!selectedFieldIndex) return null;

  const selectedField = sector.fields[selectedFieldIndex];
  let content = null;

  const title = (
    <div className="fieldInfo__titleBox">
      <input
        className="fieldInfo__title"
        type="text"
        value={selectedField.title}
        aria-label="Name des Felds"
        onChange={(e) => updateFieldTitle(e.target.value)}
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

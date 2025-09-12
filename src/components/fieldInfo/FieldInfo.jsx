import "./fieldInfo.css";
import { useSectorStore } from "../../utils/store";
import FieldInfoAddWorld from "./FieldInfoAddWorld";
import FieldInfoChangeFieldType from "./FieldInfoChangeFieldType";
import InfoBoxTitle from "../infoBox/InfoBoxTitle";
import FieldInfoListOfWorlds from "./FieldInfoListOfWorlds";

export default function FieldInfo() {
  const selectedInfo = useSectorStore((s) => s.selectedInfo);
  if (selectedInfo !== "FieldInfo") return null;
  return <FieldInfoInner />;
}

function FieldInfoInner() {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const selectedField = sector.fields[selectedFieldIndex];

  let content = null;

  if (selectedField.type === "Schwarzes Loch") {
    content = <InfoBoxTitle titleType="field" />;
  }

  if (selectedField.type === "Stern") {
    content = (
      <>
        <InfoBoxTitle titleType="field" />
        <FieldInfoListOfWorlds />
        <FieldInfoAddWorld />
      </>
    );
  }

  return (
    <div className="fieldInfo">
      <p className="fieldInfo__baseInfo smallText">
        Feld: {selectedField.index + 1}, Typ: {selectedField.type}
      </p>
      <div className="fieldInfo__content">{content}</div>
      <FieldInfoChangeFieldType />
    </div>
  );
}

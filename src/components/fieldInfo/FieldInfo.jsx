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

  return (
    <>
      <p className="fieldInfo__baseInfo smallText">
        Feld: {selectedFieldIndex + 1}, Typ: {selectedField.type}
      </p>
      {selectedField.type !== "Leere" && <InfoBoxTitle titleType="field" />}
      <FieldInfoListOfWorlds />
      <div className="infoBox__controlls">
        <FieldInfoAddWorld />
        <FieldInfoChangeFieldType />
      </div>
    </>
  );
}

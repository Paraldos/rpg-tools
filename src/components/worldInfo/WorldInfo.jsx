import "./worldInfo.css";
import { useSectorStore } from "../../utils/store";
import XBtn from "../xBtn/XBtn";
import WorldInfoListOfTags from "./WorldInfoListOfTags";
import WorldInfoPositionControls from "./WorldInfoPositionControls";
import WorldInfoAddTag from "./WolrdInfoAddTag";
import InfoBoxTitle from "../infoBox/InfoBoxTitle";

export default function WorldInfo() {
  const selectedInfo = useSectorStore((s) => s.selectedInfo);
  if (selectedInfo !== "WorldInfo") return null;
  return <WorldInfoInner />;
}

function WorldInfoInner() {
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const sector = useSectorStore((s) => s.sector);
  const setSelectedFieldIndex = useSectorStore((s) => s.setSelectedFieldIndex);
  const selectedField = sector.fields[selectedWorldIndex[0]];

  return (
    <div className="worldInfo">
      <XBtn onClick={() => setSelectedFieldIndex(selectedWorldIndex[0])} />
      <p className="worldInfo__baseInfo smallText">
        Feld: {selectedField.index + 1}, Typ: {selectedField.type}
      </p>
      <InfoBoxTitle titleType="world" />
      <WorldInfoListOfTags />
      <WorldInfoAddTag />
      <WorldInfoPositionControls />
    </div>
  );
}

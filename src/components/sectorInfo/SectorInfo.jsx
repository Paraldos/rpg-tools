import "./sectorInfo.css";
import { useSectorStore } from "../../utils/store";
import SectorInfoAddTag from "./SectorInfoAddTag";
import InfoBoxTitle from "../infoBox/InfoBoxTitle";

export default function SectorInfo() {
  const selectedInfo = useSectorStore((s) => s.selectedInfo);
  if (selectedInfo !== "SectorInfo") return null;
  return <SectorInfoInner />;
}

function SectorInfoInner() {
  return (
    <div className="sectorInfo">
      <InfoBoxTitle titleType="sector" />
      <SectorInfoAddTag />
    </div>
  );
}

import "./sectorInfo.css";
import { useSectorStore } from "../../utils/store";
import SectorInfoTitle from "./SectorInfoTitle";
import SectorInfoAddTag from "./SectorInfoAddTag";

export default function SectorInfo() {
  const selectedInfo = useSectorStore((s) => s.selectedInfo);
  if (selectedInfo !== "SectorInfo") return null;
  return <SectorInfoInner />;
}

function SectorInfoInner() {
  return (
    <div className="sectorInfo">
      <SectorInfoTitle />
      <SectorInfoAddTag />
    </div>
  );
}

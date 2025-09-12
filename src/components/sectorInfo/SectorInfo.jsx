import "./sectorInfo.css";
import { useSectorStore } from "../../utils/store";
import { updateSectorTitle } from "../../utils/sectorHelper";
import SectorInfoAddTag from "./SectorInfoAddTag";
import InfoBoxTitle from "../infoBox/InfoBoxTitle";

export default function SectorInfo() {
  const selectedInfo = useSectorStore((s) => s.selectedInfo);
  if (selectedInfo !== "SectorInfo") return null;
  return <SectorInfoInner />;
}

function SectorInfoInner() {
  const sector = useSectorStore((s) => s.sector);

  return (
    <div className="sectorInfo">
      <InfoBoxTitle
        title={sector.title}
        onChangeHandler={(newTitle) => updateSectorTitle(newTitle)}
      />
      <SectorInfoAddTag />
    </div>
  );
}

import "./sectorInfo.css";
import { SvgText } from "../svgs/Svgs";
import { updateSectorTitle } from "../../utils/sectorHelper";
import { useSectorStore } from "../../utils/store";

export default function SectorInfo() {
  const selectedInfoMenu = useSectorStore((s) => s.selectedInfoMenu);
  if (selectedInfoMenu !== "SectorInfo") return null;
  return <SectorInfoInner />;
}

function SectorInfoInner() {
  const sector = useSectorStore((s) => s.sector);

  return (
    <div className="sectorInfo">
      <h2 className="sectorInfo__title">
        <input
          className="ssectorInfo__input h2"
          type="text"
          value={sector.title}
          aria-label="Name des Sectors"
          onChange={(e) => updateSectorTitle(e.target.value)}
        />
        <SvgText />
      </h2>
    </div>
  );
}

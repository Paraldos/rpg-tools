import "./sectorInfo.css";
import { SvgText } from "../svgs/Svgs";
import { updateSectorTitle } from "../../utils/sectorHelper";
import { useSectorStore } from "../../utils/store";

export default function SectorInfo() {
  const sector = useSectorStore((s) => s.sector);

  if (!sector) return;

  return (
    <div className="sectorInfo">
      <div className="sectorInfo__title">
        <input
          className="ssectorInfo__input"
          type="text"
          value={sector.title}
          aria-label="Name des Sectors"
          onChange={(e) => updateSectorTitle(e.target.value)}
        />
        <SvgText />
      </div>
    </div>
  );
}

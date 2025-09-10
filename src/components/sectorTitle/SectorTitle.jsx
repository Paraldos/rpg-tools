import "./sectorTitle.css";
import { useSectorStore } from "../../utils/store";
import { SvgText } from "../svgs/Svgs";
import { updateSectorTitle } from "../../utils/sectorHelper";

export default function SectorTitle() {
  const sector = useSectorStore((s) => s.sector);

  if (!sector) return;

  return (
    <h1 className="sectorTitle">
      Sektor:
      <input
        className="sectorTitle__input"
        type="text"
        value={sector.title}
        aria-label="Name des Sectors"
        onChange={(e) => updateSectorTitle(e.target.value)}
      />
      <SvgText />
    </h1>
  );
}

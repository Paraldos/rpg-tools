import { SvgText } from "../svgs/Svgs";
import { updateSectorTitle } from "../../utils/sectorHelper";
import { useSectorStore } from "../../utils/store";

export default function SectorInfoTitle() {
  const sector = useSectorStore((s) => s.sector);

  return (
    <h2 className="infoBox__title">
      <input
        type="text"
        value={sector.title}
        aria-label="Name des Sectors"
        onChange={(e) => updateSectorTitle(e.target.value)}
      />
      <SvgText />
    </h2>
  );
}

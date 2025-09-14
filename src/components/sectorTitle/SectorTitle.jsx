import "./sectorTitle.css";
import { useSectorStore } from "../../utils/store";
import { SvgCog, SvgFloppy, SvgPlus } from "../svgs/Svgs";

export default function SectorTitle() {
  const sector = useSectorStore((s) => s.sector);
  const openSectorInfo = useSectorStore((s) => s.openSectorInfo);
  const newSector = useSectorStore((s) => s.newSector);
  const toggleSaveMenu = useSectorStore((s) => s.toggleSaveMenu);
  const toggleOptions = useSectorStore((s) => s.toggleOptions);

  return (
    <div className="sectorTitle">
      {sector && (
        <button className="sectorTitle" onClick={openSectorInfo}>
          <h1>Sektor: {sector.title}</h1>
          <p>{sector.tags.join(", ")}</p>
        </button>
      )}
      <button onClick={newSector} className="symbolBtn">
        <SvgPlus />
      </button>
      <button onClick={toggleSaveMenu} className="symbolBtn">
        <SvgFloppy />
      </button>
      <button onClick={toggleOptions} className="symbolBtn">
        <SvgCog />
      </button>
    </div>
  );
}

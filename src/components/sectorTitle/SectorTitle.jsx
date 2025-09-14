import "./sectorTitle.css";
import { useSectorStore } from "../../utils/store";
import { SvgCog, SvgFloppy, SvgPlus } from "../svgs/Svgs";

export default function SectorTitle() {
  const sector = useSectorStore((s) => s.sector);
  const openSectorInfo = useSectorStore((s) => s.openSectorInfo);
  const newSector = useSectorStore((s) => s.newSector);
  const openSaveMenu = useSectorStore((s) => s.openSaveMenu);
  const openOptions = useSectorStore((s) => s.openOptions);

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
      <button onClick={openSaveMenu} className="symbolBtn">
        <SvgFloppy />
      </button>
      <button onClick={openOptions} className="symbolBtn">
        <SvgCog />
      </button>
    </div>
  );
}

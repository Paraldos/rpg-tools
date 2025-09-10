import "./sectorTitle.css";
import { useSectorStore } from "../../utils/store";

export default function SectorTitle() {
  const sector = useSectorStore((s) => s.sector);
  const openSectorInfo = useSectorStore((s) => s.openSectorInfo);

  if (!sector) return;

  return (
    <button className="sectorTitle h1" onClick={openSectorInfo}>
      Sektor: {sector.title}
    </button>
  );
}

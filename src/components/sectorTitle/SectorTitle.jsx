import "./sectorTitle.css";
import { useSectorStore } from "../../utils/store";

export default function SectorTitle() {
  const sector = useSectorStore((s) => s.sector);
  const openSectorInfo = useSectorStore((s) => s.openSectorInfo);

  if (!sector) return;

  return (
    <button className="sectorTitle" onClick={openSectorInfo}>
      <h1>Sektor: {sector.title}</h1>
      <p>{sector.tags.join(", ")}</p>
    </button>
  );
}

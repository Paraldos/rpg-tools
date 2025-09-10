import "./sectorTitle.css";
import { useSectorStore } from "../../utils/store";

export default function SectorTitle() {
  const sector = useSectorStore((s) => s.sector);

  if (!sector) return;

  return <button className="sectorTitle h1">Sektor: {sector.title}</button>;
}

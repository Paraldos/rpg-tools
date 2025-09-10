import "./controlls.css";
import { useSectorStore } from "../../utils/store";

export default function Controlls() {
  const newSector = useSectorStore((s) => s.newSector);
  const toggleSaveMenu = useSectorStore((s) => s.toggleSaveMenu);

  return (
    <div className="controlls">
      <button onClick={newSector}>Neuer Sektor</button>
      <button onClick={toggleSaveMenu}>Laden / Speichern</button>
    </div>
  );
}

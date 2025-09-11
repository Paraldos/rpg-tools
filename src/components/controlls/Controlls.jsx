import "./controlls.css";
import { useSectorStore } from "../../utils/store";

export default function Controlls() {
  const newSector = useSectorStore((s) => s.newSector);
  const toggleSaveMenu = useSectorStore((s) => s.toggleSaveMenu);
  const toggleOptionsMenu = useSectorStore((s) => s.toggleOptionsMenu);

  return (
    <div className="controlls">
      <button onClick={newSector}>Neuer Sektor</button>
      <button onClick={toggleSaveMenu}>Laden / Speichern</button>
      <button onClick={toggleOptionsMenu}>Optionen</button>
    </div>
  );
}

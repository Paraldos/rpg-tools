import "./controlls.css";
import { useSectorStore } from "../../utils/store";
import { SvgCog, SvgFloppy, SvgPlus } from "../svgs/Svgs";

export default function Controlls() {
  const newSector = useSectorStore((s) => s.newSector);
  const toggleSaveMenu = useSectorStore((s) => s.toggleSaveMenu);
  const toggleOptionsMenu = useSectorStore((s) => s.toggleOptionsMenu);

  return (
    <div className="controlls">
      <button onClick={newSector} className="symbolBtn">
        <SvgPlus />
      </button>
      <button onClick={toggleSaveMenu} className="symbolBtn">
        <SvgFloppy />
      </button>
      <button onClick={toggleOptionsMenu} className="symbolBtn">
        <SvgCog />
      </button>
    </div>
  );
}

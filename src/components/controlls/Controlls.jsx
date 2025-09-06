import "./controlls.css";
import { useSectorStore } from "../../utils/store";

export default function Controlls() {
  const newSector = useSectorStore((s) => s.newSector);

  return (
    <div className="controlls">
      <button>Load / Save</button>
      <button onClick={() => newSector(10, 8)}>New</button>
      <button>Export</button>
      <button>Import</button>
    </div>
  );
}

import "./controlls.css";
import { useCallback } from "react";
import { useSectorStore } from "../../../store";

export default function Controlls() {
  const newSector = useSectorStore((s) => s.newSector);

  const handleNewSector = useCallback(() => {
    newSector(10, 8);
  }, [newSector]);

  return (
    <div className="controlls">
      <button>Load / Save</button>
      <button onClick={handleNewSector}>New</button>
      <button>Export</button>
      <button>Import</button>
    </div>
  );
}

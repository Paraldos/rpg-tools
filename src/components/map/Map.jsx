import "./map.css";
import { useState, useCallback } from "react";
import Board from "./board/Board";
import Controlls from "./controlls/Controlls";
import { generateSector } from "../../utils/generateSector";

export default function Map() {
  const [sector, setSector] = useState(null);

  const handleNew = useCallback(() => {
    console.log("click");
    const sector = generateSector({ rows: 10, columns: 8 });
    setSector(sector);
  }, []);

  return (
    <div className="map">
      <Controlls onNew={handleNew} />
      <Board sector={sector} />
    </div>
  );
}

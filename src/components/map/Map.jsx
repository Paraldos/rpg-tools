import "./map.css";
import { useState, useCallback } from "react";
import Board from "./board/Board";
import Controlls from "./controlls/Controlls";
import { generateSector } from "../../utils/generateSector";
import InfoBox from "./infoBox/InfoBox";

export default function Map() {
  const [sector, setSector] = useState(null);
  const [selectedField, setSelectedField] = useState(null);

  const handleNew = useCallback(() => {
    const sector = generateSector({ rows: 10, columns: 8 });
    setSector(sector);
    setSelectedField(null);
  }, []);

  const onClickField = useCallback((field) => {
    setSelectedField(field);
  }, []);

  return (
    <div className="map">
      <Board sector={sector} onClickField={onClickField} />
      <Controlls onNew={handleNew} />
      <InfoBox selectedField={selectedField} />
    </div>
  );
}

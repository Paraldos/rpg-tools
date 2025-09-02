import "./map.css";
import { useState, useCallback } from "react";
import Board from "./board/Board";
import Controlls from "./controlls/Controlls";
import { generateSector, generateWorld } from "../../utils/generateSector";
import FieldInfo from "./fieldInfo/FieldInfo";

export default function Map() {
  const [sector, setSector] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNew = useCallback(() => {
    const newSector = generateSector({ rows: 10, columns: 8 });
    setSector(newSector);
    setSelectedIndex(null);
  }, []);

  const handleField = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const handleAddWorld = useCallback((index) => {
    setSector((previousSector) => {
      const selectedField = previousSector.fields[index];
      const newWorld = generateWorld(
        selectedField.title,
        selectedField.worlds?.length ?? 0
      );
      const updatedField = {
        ...selectedField,
        worlds: [...selectedField.worlds, newWorld],
      };
      const newFields = [...previousSector.fields];
      newFields[index] = updatedField;
      return { ...previousSector, fields: newFields };
    });
  }, []);

  const handleChangeType = useCallback((index, newType) => {
    setSector((previousSector) => {
      const updatedSector = { ...previousSector };
      const field = { ...updatedSector.fields[index] };
      field.type = newType;
      field.worlds = field.worlds ?? [];
      updatedSector.fields[index] = field;
      return updatedSector;
    });
  }, []);

  const selectedField =
    selectedIndex != null && sector ? sector.fields[selectedIndex] : null;

  return (
    <div className="map">
      <Board
        sector={sector}
        selectedIndex={selectedIndex}
        onField={handleField}
      />
      <div className="map__boardControlls">
        <Controlls onNew={handleNew} />
        <h2 className="sectorTitle">Sektor: {sector ? sector.title : ""}</h2>
        <div className="info-box">
          <FieldInfo
            selectedField={selectedField}
            onAddWorld={handleAddWorld}
            onChangeType={handleChangeType}
          />
        </div>
      </div>
    </div>
  );
}

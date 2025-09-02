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
      const updatedWorlds =
        selectedField.type === "Star"
          ? [
              ...selectedField.worlds,
              generateWorld(selectedField.title, selectedField.worlds.length),
            ]
          : [generateWorld(selectedField.title, 0)];

      const updatedSector = {
        ...previousSector,
        fields: [...previousSector.fields],
      };

      updatedSector.fields[index] = {
        ...selectedField,
        type: "Star",
        worlds: updatedWorlds,
      };

      return updatedSector;
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
      <Board sector={sector} onField={handleField} />
      <div className="map__boadControlls">
        <Controlls onNew={handleNew} />
        <h2 className="sectorTitle">Sektor: {sector ? sector.title : ""}</h2>
        <div className="info-box">
          <FieldInfo
            selectedField={selectedField}
            onAddWorld={() =>
              selectedIndex != null && handleAddWorld(selectedIndex)
            }
            onAddBlackHole={() =>
              selectedIndex != null && handleAddBlackHole(selectedIndex)
            }
            onChangeType={handleChangeType}
          />
        </div>
      </div>
    </div>
  );
}

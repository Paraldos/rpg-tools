import "./map.css";
import { useState, useCallback } from "react";
import Board from "./board/Board";
import Controlls from "./controlls/Controlls";
import { generateSector, generateWorld } from "../../utils/generateSector";
import FieldInfo from "./fieldInfo/FieldInfo";

export default function Map() {
  const [sector, setSector] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNewSector = useCallback(() => {
    const newSector = generateSector({ rows: 10, columns: 8 });
    setSector(newSector);
    setSelectedIndex(null);
  }, []);

  const handleOpenFieldInfo = useCallback((index) => {
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

  const handleChangeFieldType = useCallback((index, newType) => {
    setSector((previousSector) => {
      const updatedSector = { ...previousSector };
      const field = { ...updatedSector.fields[index] };
      field.type = newType;
      field.worlds = field.worlds ?? [];
      updatedSector.fields[index] = field;
      return updatedSector;
    });
  }, []);

  const handleOpenWorldInfo = useCallback((indexField, indexWorld) => {
    console.log(indexField, " / ", indexWorld);
  }, []);

  const selectedField =
    selectedIndex != null && sector ? sector.fields[selectedIndex] : null;

  return (
    <div className="map">
      <div className="map__left">
        <h2 className="sectorTitle">Sektor: {sector ? sector.title : ""}</h2>
        <Board
          sector={sector}
          selectedIndex={selectedIndex}
          onOpenFieldInfo={handleOpenFieldInfo}
        />
      </div>
      <div className="map__right">
        <Controlls onNewSector={handleNewSector} />
        <div className="info-box">
          <FieldInfo
            selectedField={selectedField}
            onAddWorld={handleAddWorld}
            onChangeFieldType={handleChangeFieldType}
            onOpenWorldInfo={handleOpenWorldInfo}
          />
        </div>
      </div>
    </div>
  );
}

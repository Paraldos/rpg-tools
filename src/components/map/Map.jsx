import "./map.css";
import { useState, useCallback } from "react";
import Board from "./board/Board";
import Controlls from "./controlls/Controlls";
import { generateWorld } from "../../utils/sectorHelper";
import FieldInfo from "./fieldInfo/FieldInfo";
import { useSectorStore } from "../../store";

export default function Map() {
  const sector = useSectorStore((s) => s.sector);
  const setSector = useSectorStore((s) => s.setSector);

  const handleAddWorld = useCallback(
    (index) => {
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
    },
    [setSector]
  );

  const handleChangeFieldType = useCallback(
    (index, newType) => {
      setSector((previousSector) => {
        const updatedSector = { ...previousSector };
        const field = { ...updatedSector.fields[index] };
        field.type = newType;
        field.worlds = field.worlds ?? [];
        updatedSector.fields[index] = field;
        return updatedSector;
      });
    },
    [setSector]
  );

  const handleOpenWorldInfo = useCallback((indexField, indexWorld) => {
    console.log(indexField, " / ", indexWorld);
  }, []);

  return (
    <div className="map">
      <div className="map__left">
        <h2 className="sectorTitle">Sektor: {sector ? sector.title : ""}</h2>
        <Board sector={sector} />
      </div>
      <div className="map__right">
        <Controlls />
        <div className="info-box">
          <FieldInfo
            onAddWorld={handleAddWorld}
            onChangeFieldType={handleChangeFieldType}
            onOpenWorldInfo={handleOpenWorldInfo}
          />
        </div>
      </div>
    </div>
  );
}

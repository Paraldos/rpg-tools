import "./map.css";
import Board from "../board/Board";
import Controlls from "../controlls/Controlls";
import FieldInfo from "../fieldInfo/FieldInfo";
import { useSectorStore } from "../../utils/store";

export default function Map() {
  const sector = useSectorStore((s) => s.sector);

  return (
    <div className="map">
      <div className="map__left">
        <h2 className="sectorTitle">Sektor: {sector ? sector.title : ""}</h2>
        <Board sector={sector} />
      </div>
      <div className="map__right">
        <Controlls />
        <div className="info-box">
          <FieldInfo />
        </div>
      </div>
    </div>
  );
}

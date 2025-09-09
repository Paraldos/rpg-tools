import "./map.css";
import { useSectorStore } from "../../utils/store";
import Board from "../board/Board";
import Controlls from "../controlls/Controlls";
import FieldInfo from "../fieldInfo/FieldInfo";
import WorldInfo from "../worldInfo/WorldInfo";
import SaveMenu from "../saveMenu/SaveMenu";

export default function Map() {
  const sector = useSectorStore((s) => s.sector);

  return (
    <div className="map">
      <div className="map__left">
        {sector && <h2 className="sectorTitle">Sektor: {sector.title}</h2>}
        <Board sector={sector} />
      </div>
      <div className="map__right">
        <Controlls />
        <div className="map__infoBox">
          <FieldInfo />
          <WorldInfo />
          <SaveMenu />
        </div>
      </div>
    </div>
  );
}

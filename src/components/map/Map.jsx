import "./map.css";
import SectorTitle from "../sectorTitle/SectorTitle";
import Board from "../board/Board";
import InfoBox from "../infoBox/InfoBox";
import FieldInfo from "../fieldInfo/FieldInfo";
import WorldInfo from "../worldInfo/WorldInfo";
import SaveMenu from "../saveMenu/SaveMenu";
import SectorInfo from "../sectorInfo/SectorInfo";
import Options from "../options/Options";
import { useSectorStore } from "../../utils/store";

export default function Map() {
  const sector = useSectorStore((s) => s.sector);

  return (
    <div className="map">
      <SectorTitle className="map__top" />
      <Board />
      <InfoBox>
        <FieldInfo />
        <WorldInfo />
        <SaveMenu />
        <SectorInfo />
        <Options />
      </InfoBox>
    </div>
  );
}

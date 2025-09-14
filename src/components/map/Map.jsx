import "./map.css";
import { useSectorStore } from "../../utils/store";
import Board from "../board/Board";
import Controlls from "../controlls/Controlls";
import FieldInfo from "../fieldInfo/FieldInfo";
import WorldInfo from "../worldInfo/WorldInfo";
import SaveMenu from "../saveMenu/SaveMenu";
import SectorTitle from "../sectorTitle/SectorTitle";
import SectorInfo from "../sectorInfo/SectorInfo";
import { OptionsMenu } from "../optionsMenu/OptionsMenu";
import InfoBox from "../infoBox/InfoBox";

export default function Map() {
  const sector = useSectorStore((s) => s.sector);

  return (
    <div className="map">
      <div className="map__top">
        <SectorTitle />
        <Controlls />
      </div>
      <Board sector={sector} className="map__board" />
      <InfoBox className="map__infobox">
        <FieldInfo />
        <WorldInfo />
        <SaveMenu />
        <SectorInfo />
        <OptionsMenu />
      </InfoBox>
    </div>
  );
}

import "./map.css";
import Board from "./board/Board";
import Controlls from "./controlls/Controlls";

export default function Map() {
  return (
    <dvi className="map">
      <Controlls />
      <Board />
    </dvi>
  );
}

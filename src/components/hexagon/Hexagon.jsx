import "./Hexagon.css";

export default function HexField({ hexagonWidth }) {
  return (
    <div
      className="hexagon"
      style={{
        width: `${hexagonWidth}px`,
        height: `${hexagonWidth}px`,
      }}
    ></div>
  );
}

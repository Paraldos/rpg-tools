import "./Hexagon.css";

export default function HexField({ columnStart, columnEnd, rowStart, rowEnd }) {
  return (
    <>
      <div
        className="hexagon-border"
        style={{
          gridColumnStart: columnStart,
          gridColumnEnd: columnEnd,
          gridRowStart: rowStart,
          gridRowEnd: rowEnd,
        }}
      >
        <div className="hexagon"></div>
      </div>
    </>
  );
}

import "./Hexagon.css";

export default function HexField({
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  hexNumber = 0,
}) {
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
        <div className="hexagon">{hexNumber > 0 && <p>{hexNumber}</p>}</div>
      </div>
    </>
  );
}

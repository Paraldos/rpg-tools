import "./Hexagon.css";

export default function HexField({
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  hexNumber,
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
        <div className="hexagon">
          <p>{hexNumber}</p>
        </div>
      </div>
    </>
  );
}

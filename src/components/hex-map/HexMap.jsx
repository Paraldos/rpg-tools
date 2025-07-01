import "./HexMap.css";
import Hexagon from "../hexagon/Hexagon";

export default function HexMap() {
  const widthOfMap = 3;
  const heightOfMap = widthOfMap;
  const hexMapArray = [];

  const getColumnStart = (col, distanceFromMiddle) => {
    const colOffset = col + distanceFromMiddle / 2;
    return colOffset * 4 + 1;
  };

  const getColumnEnd = (col, distanceFromMiddle) => {
    const colOffset = col + distanceFromMiddle / 2;
    return colOffset * 4 + 5;
  };

  const getRowStart = (row) => {
    return row * 4 + 1 - row;
  };

  const getRowEnd = (row) => {
    return row * 4 + 5 - row;
  };

  for (let row = 0; row < heightOfMap; row++) {
    const middleRow = Math.floor(widthOfMap / 2);
    const distanceFromMiddle = Math.abs(row - middleRow);
    const fieldsInRow = widthOfMap - distanceFromMiddle;

    for (let col = 0; col < fieldsInRow; col++) {
      const columnStart = getColumnStart(col, distanceFromMiddle);
      const columnEnd = getColumnEnd(col, distanceFromMiddle);
      const rowStart = getRowStart(row);
      const rowEnd = getRowEnd(row);
      hexMapArray.push({ columnStart, columnEnd, rowStart, rowEnd });
    }
  }

  return (
    <div
      className="hex-map"
      style={{
        gridTemplateColumns: `repeat(${widthOfMap * 4} , 1fr)`,
        gridTemplateRows: `repeat(${heightOfMap * 4 - widthOfMap + 1}, 1fr)`,
        aspectRatio: `${widthOfMap * 4} / ${heightOfMap * 4 - widthOfMap + 1}`,
      }}
    >
      {hexMapArray.map((hexPosition, index) => (
        <Hexagon
          key={index}
          columnStart={hexPosition.columnStart}
          columnEnd={hexPosition.columnEnd}
          rowStart={hexPosition.rowStart}
          rowEnd={hexPosition.rowEnd}
          hexNumber={index + 1}
        />
      ))}
    </div>
  );
}

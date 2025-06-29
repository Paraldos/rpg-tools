import "./HexMap.css";
import Hexagon from "../hexagon/Hexagon";

export default function HexMap() {
  const widthOfMap = 3;
  const heightOfMap = widthOfMap;
  const hexMapArray = [];

  for (let row = 0; row < heightOfMap; row++) {
    const middleRow = Math.floor(widthOfMap / 2);
    const distanceFromMiddle = Math.abs(row - middleRow);
    const fieldsInRow = widthOfMap - distanceFromMiddle;
    let hexagon = { row: 0, col: 0 };

    for (let col = 0; col < fieldsInRow; col++) {
      const colOffset = col + distanceFromMiddle / 2;
      const columnStart = colOffset * 4 + 1;
      const columnEnd = colOffset * 4 + 5;

      let rowOffset = row;
      const rowStart = row * 4 + 1 - rowOffset;
      const rowEnd = row * 4 + 5 - rowOffset;

      hexagon = { columnStart, columnEnd, rowStart, rowEnd };
      hexMapArray.push(hexagon);
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
      {hexMapArray.map((hexagon, index) => (
        <Hexagon
          key={index}
          columnStart={hexagon.columnStart}
          columnEnd={hexagon.columnEnd}
          rowStart={hexagon.rowStart}
          rowEnd={hexagon.rowEnd}
          hexNumber={index + 1}
        />
      ))}
    </div>
  );
}

import "./HexMap.css";
import Hexfield from "../svgs/HexField";

export default function HexMap() {
  const widthOfField = 7;
  const heightOfField = widthOfField;
  const hexFieldArray = [];

  for (let row = 0; row < heightOfField; row++) {
    const middleRow = Math.floor(widthOfField / 2);
    const distanceFromMiddle = Math.abs(row - middleRow);
    const fieldsInRow = widthOfField - distanceFromMiddle;

    const rowArray = [];
    for (let col = 0; col < fieldsInRow; col++) {
      rowArray.push(1);
    }

    hexFieldArray.push(rowArray);
  }

  console.log(hexFieldArray);

  return (
    <div className="hex-map">
      {hexFieldArray.map((row, rowIndex) => (
        <div className="hex-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Hexfield key={`${rowIndex}-${colIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

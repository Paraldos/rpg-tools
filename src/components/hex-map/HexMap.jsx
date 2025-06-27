import { useEffect, useState } from "react";
import "./HexMap.css";
import Hexagon from "../hexagon/Hexagon";

export default function HexMap() {
  const widthOfField = 7;
  const heightOfField = widthOfField;

  const [hexagonWidth, setHexagonWidth] = useState(
    () => Math.min(window.innerWidth, window.innerHeight) / widthOfField
  );

  useEffect(() => {
    const handleResize = () => {
      setHexagonWidth(
        Math.min(window.innerWidth, window.innerHeight) / widthOfField
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [widthOfField]);

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

  return (
    <div className="hex-map">
      {hexFieldArray.map((row, rowIndex) => (
        <div
          className="hex-row"
          key={rowIndex}
          style={{
            transform: `translateY(-${rowIndex * 25}%)`,
          }}
        >
          {row.map((cell, colIndex) => (
            <Hexagon
              key={`${rowIndex}-${colIndex}`}
              hexagonWidth={hexagonWidth}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

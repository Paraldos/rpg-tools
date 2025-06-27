import "./HexMap.css";
import Hexfield from "../svgs/HexField";

export default function HexMap() {
  const amountOfHexfields = 7;
  const hexFieldArray = Array.from({ length: amountOfHexfields });

  return (
    <div className="hex-map">
      {hexFieldArray.map((_, index) => (
        <Hexfield key={index} />
      ))}
    </div>
  );
}

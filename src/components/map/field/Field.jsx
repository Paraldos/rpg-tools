import "./Field.css";
import { BlackHole, Star } from "../../icons/svgs";

export default function Field({ field, index, onField }) {
  const getColumnStart = () => {
    const offset = field.row % 2 !== 0 ? 2 : 0;
    return field.column * 4 + offset + 1;
  };

  const getColumnEnd = () => {
    const offset = field.row % 2 !== 0 ? 2 : 0;
    return field.column * 4 + offset + 5;
  };

  const getRowStart = () => {
    return field.row * 4 + 1 - field.row;
  };

  const getRowEnd = () => {
    return field.row * 4 + 5 - field.row;
  };

  let svg = null;
  if (field.type === "Star") {
    svg = <Star />;
  } else if (field.type === "Black Hole") {
    svg = <BlackHole />;
  }

  return (
    <div
      className="field"
      style={{
        gridColumnStart: getColumnStart(),
        gridColumnEnd: getColumnEnd(),
        gridRowStart: getRowStart(),
        gridRowEnd: getRowEnd(),
      }}
    >
      <div className="field-inside" onClick={() => onField(field.index)}></div>
      <p className="field-number">{index + 1}</p>
      {svg}
    </div>
  );
}

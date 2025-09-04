import "./Field.css";
import { BlackHole, Star } from "../../../utils/svgs";

export default function Field({ field, index, selectedIndex, onClickOnField }) {
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
  if (field.type === "Stern") {
    svg = <Star />;
  } else if (field.type === "Schwarzes Loch") {
    svg = <BlackHole />;
  }

  return (
    <div
      className={`field ${selectedIndex === index && "field--selected"}`}
      style={{
        gridColumnStart: getColumnStart(),
        gridColumnEnd: getColumnEnd(),
        gridRowStart: getRowStart(),
        gridRowEnd: getRowEnd(),
      }}
    >
      <div
        className="field-inside"
        onClick={() => onClickOnField(field.index)}
      ></div>
      <p className="field-number">{field.index + 1}</p>
      {svg}
    </div>
  );
}

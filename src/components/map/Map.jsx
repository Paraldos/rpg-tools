import "./Map.css";
import Field from "../field/Field";

export default function HexMap() {
  const rows = 10;
  const columns = 8;
  const fieldsArray = [];

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      fieldsArray.push({
        row: row,
        column: column,
      });
    }
  }

  return (
    <div
      className="map"
      style={{
        gridTemplateColumns: `repeat(${columns * 4 + 2} , 1fr)`,
        gridTemplateRows: `repeat(${rows * 3 + 1}, 1fr)`,
      }}
    >
      {fieldsArray.map((fieldData, index) => (
        <Field key={index} fieldData={fieldData} index={index} />
      ))}
    </div>
  );
}

import "./Field.css";

export default function Field({ fieldData, index }) {
  const getColumnStart = () => {
    const offset = fieldData.row % 2 !== 0 ? 2 : 0;
    return fieldData.column * 4 + offset + 1;
  };

  const getColumnEnd = () => {
    const offset = fieldData.row % 2 !== 0 ? 2 : 0;
    return fieldData.column * 4 + offset + 5;
  };

  const getRowStart = () => {
    return fieldData.row * 4 + 1 - fieldData.row;
  };

  const getRowEnd = () => {
    return fieldData.row * 4 + 5 - fieldData.row;
  };

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
      <div className="field-inside"></div>
      <p className="field-number">{index + 1}</p>
    </div>
  );
}

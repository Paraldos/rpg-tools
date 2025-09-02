import "./Field.css";

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

  const blackHole = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="field-svg"
    >
      <g stroke="#fff" stroke-width="1">
        <circle cx="12" cy="12" r="2" />
        <path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12" />
        <path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12" />
        <path
          stroke-linecap="round"
          d="M10 12.312c0-2.78 3.707-3.89 7-3.024m5 6.024c0-1.97-.806-3.456-2-4.49M14 12c0 2.779-3.707 3.89-7 3.024M2 9c0 1.68.586 3.008 1.5 4.004"
        />
      </g>
    </svg>
  );

  const star = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        d="m12 3 1.43 5.312c.175.648.262.972.434 1.237a2 2 0 0 0 .587.587c.265.172.589.26 1.237.434L21 12l-5.312 1.43c-.648.175-.972.262-1.237.434a1.999 1.999 0 0 0-.587.587c-.172.265-.26.589-.434 1.237L12 21l-1.43-5.312c-.175-.648-.262-.972-.434-1.237a2 2 0 0 0-.587-.587c-.265-.172-.589-.26-1.237-.434L3 12l5.312-1.43c.648-.175.972-.262 1.237-.434a2 2 0 0 0 .587-.587c.172-.265.26-.589.434-1.237L12 3Z"
      />
    </svg>
  );

  let svg = null;
  if (field.type === "Star") {
    svg = star;
  } else if (field.type === "Black Hole") {
    svg = blackHole;
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

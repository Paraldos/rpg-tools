import "./board.css";
import Field from "../field/Field";

export default function Board({ sector, onClickField }) {
  if (!sector) return <div className="board">Noch keine Karte generiert.</div>;

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${sector.columns * 4 + 2} , 1fr)`,
        gridTemplateRows: `repeat(${sector.rows * 3 + 1}, 1fr)`,
      }}
    >
      {sector.fields.map((field, index) => (
        <Field
          key={index}
          field={field}
          index={index}
          onClickField={onClickField}
        />
      ))}
    </div>
  );
}

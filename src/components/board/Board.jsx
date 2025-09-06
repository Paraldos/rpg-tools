import "./board.css";
import Field from "../field/Field";

export default function Board({ sector }) {
  if (!sector) return <div className="board">Noch keine Karte generiert.</div>;

  const columns = sector.columns * 4 + 2;
  const rows = sector.rows * 3 + 1;

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${columns} , 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {sector.fields.map((field, index) => (
        <Field key={index} field={field} index={index} />
      ))}
    </div>
  );
}

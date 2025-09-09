import "./board.css";
import Field from "../field/Field";

export default function Board({ sector }) {
  if (!sector)
    return <h3 className="board__empty">Noch keine Sektor generiert</h3>;

  const columns = sector.columns * 4 + 2;
  const rows = sector.rows * 3 + 1;
  const boardStyles = {
    gridTemplateColumns: `repeat(${columns} , 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  return (
    <div className="board" style={boardStyles}>
      {sector.fields.map((field, index) => (
        <Field key={index} field={field} index={index} />
      ))}
    </div>
  );
}

import "./board.css";
import Field from "../field/Field";
import { useSectorStore } from "../../utils/store";

export default function Board() {
  const sector = useSectorStore((s) => s.sector);
  if (!sector) return <h3 className="board">Noch keine Sektor generiert</h3>;

  const columns = sector.columns * 4 + 2;
  const rows = sector.rows * 3 - 1;
  const boardStyles = {
    gridTemplateColumns: `repeat(${columns} , 1fr)`,
    gridTemplateRows: `repeat(${rows + 2}, 1fr)`,
    aspectRatio: columns / (rows + 2),
  };

  return (
    <div className="board" style={boardStyles}>
      {sector.fields.map((field, index) => (
        <Field key={`field__${index}`} field={field} index={index} />
      ))}
    </div>
  );
}

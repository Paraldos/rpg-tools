import "./board.css";
import Field from "../field/Field";
import { generateSector } from "../../../utils/generateSector";

export default function Board() {
  const sector = generateSector();

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${sector.columns * 4 + 2} , 1fr)`,
        gridTemplateRows: `repeat(${sector.rows * 3 + 1}, 1fr)`,
      }}
    >
      {sector.fields.map((field, index) => (
        <Field key={index} field={field} index={index} />
      ))}
    </div>
  );
}

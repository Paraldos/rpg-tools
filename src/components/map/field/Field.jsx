import "./Field.css";
import { SvgBlackHole, SvgStar } from "../../../utils/svgs";
import { useCallback } from "react";
import { useSectorStore } from "../../../utils/store";

export default function Field({ field, index }) {
  const getColumnStart = () =>
    field.column * 4 + (field.row % 2 !== 0 ? 2 : 0) + 1;
  const getColumnEnd = () =>
    field.column * 4 + (field.row % 2 !== 0 ? 2 : 0) + 5;
  const getRowStart = () => field.row * 4 + 1 - field.row;
  const getRowEnd = () => field.row * 4 + 5 - field.row;

  let svg = null;
  if (field.type === "Stern") svg = <SvgStar />;
  if (field.type === "Schwarzes Loch") svg = <SvgBlackHole />;

  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const setSelectedField = useSectorStore((s) => s.setSelectedFieldIndex);
  const handleClick = useCallback(() => {
    setSelectedField(index);
  }, [index, setSelectedField]);

  return (
    <div
      className={`field ${selectedFieldIndex === index && "field--selected"}`}
      style={{
        gridColumnStart: getColumnStart(),
        gridColumnEnd: getColumnEnd(),
        gridRowStart: getRowStart(),
        gridRowEnd: getRowEnd(),
      }}
    >
      <div className="field-inside" onClick={handleClick}></div>
      <p className="field-number">{field.index + 1}</p>
      {svg}
    </div>
  );
}

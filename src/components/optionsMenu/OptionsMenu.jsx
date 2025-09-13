import "./optionsMenu.css";
import { useSectorStore } from "../../utils/store";
import XBtn from "../xBtn/XBtn";

export const OptionsMenu = () => {
  const selectedInfo = useSectorStore((s) => s.selectedInfo);
  const sector = useSectorStore((s) => s.sector);

  if (selectedInfo !== "OptionsMenu") return null;

  return (
    <div className="optionsMenu">
      <XBtn />
      <h2>Options Menu</h2>

      <div className="optionsMenu__numberInput">
        <label htmlFor="optionsMenu__rows">Reihen</label>
        <input
          id="optionsMenu__rows"
          type="number"
          value={sector.rows}
          min={1}
          max={20}
        />
      </div>
      <div className="optionsMenu__numberInput">
        <label htmlFor="optionsMenu__columns">Spalten</label>
        <input
          id="optionsMenu__columns"
          type="number"
          value={sector.columns}
          min={1}
          max={20}
        />
      </div>
    </div>
  );
};

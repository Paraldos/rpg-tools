import "./controlls.css";

export default function Controlls({ onNewSector }) {
  return (
    <div className="controlls">
      <button>Load / Save</button>
      <button onClick={onNewSector}>New</button>
      <button>Export</button>
      <button>Import</button>
    </div>
  );
}

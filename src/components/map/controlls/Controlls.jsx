import "./controlls.css";

export default function Controlls({ onNew }) {
  return (
    <div className="controlls">
      <button>Load / Save</button>
      <button onClick={onNew}>New</button>
      <button>Export</button>
      <button>Import</button>
    </div>
  );
}

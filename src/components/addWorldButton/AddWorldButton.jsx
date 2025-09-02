import "./addWorldButton.css";

export default function AddWorldButton({ onAdd }) {
  return (
    <button className="fieldInfo__addWorld" onClick={onAdd}>
      Welt hinzufügen
    </button>
  );
}

import "./fieldInfo.css";
import AddWorldButton from "../../addWorldButton/AddWorldButton";

export default function FieldInfo({ selectedField, onAddWorld }) {
  if (!selectedField) return null;

  let content = null;
  const amountOfWorlds = selectedField.worlds?.length ?? 0;
  const canAddWorld = amountOfWorlds < 6;

  if (selectedField.type == "Empty") {
    content = (
      <>
        <p>Typ: Leere, Feld: {selectedField.index + 1}</p>
        {canAddWorld && (
          <AddWorldButton onAdd={() => onAddWorld?.(selectedField.index)} />
        )}
      </>
    );
  } else if (selectedField.type == "Black Hole") {
    content = (
      <>
        <p>Typ: Schwarzes Loch, Feld: {selectedField.index + 1}</p>
        <h2>{selectedField.title}</h2>
      </>
    );
  } else {
    content = (
      <>
        <p>Typ: Stern, Feld: {selectedField.index + 1}</p>
        <h2>{selectedField.title}</h2>
        {selectedField.worlds.map((world, i) => (
          <button key={i} className="fieldInfo__world">
            <b>{world.name}</b> ({world.tags.join(", ")})
          </button>
        ))}
        {canAddWorld && (
          <AddWorldButton onAdd={() => onAddWorld?.(selectedField.index)} />
        )}
      </>
    );
  }

  return <div className="fieldInfo">{content}</div>;
}

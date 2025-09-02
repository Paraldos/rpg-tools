import "./fieldInfo.css";

export default function FieldInfo({ selectedField }) {
  if (!selectedField) return null;

  let content = null;

  if (selectedField.type == "Empty") {
    content = (
      <>
        <p>Typ: Leere, Feld: {selectedField.number}</p>
        <button className="fieldInfo__addWorld">Welt hinzufügen</button>
      </>
    );
  } else if (selectedField.type == "Black Hole") {
    content = (
      <>
        <p>Typ: Schwarzes Loch, Feld: {selectedField.number}</p>
        <h2>{selectedField.title}</h2>
      </>
    );
  } else {
    content = (
      <>
        <p>Typ: Stern, Feld: {selectedField.number}</p>
        <h2>{selectedField.title}</h2>
        {selectedField.worlds.map((world, i) => (
          <button key={i} className="fieldInfo__world">
            <b>{world.name}</b> ({world.tags.join(", ")})
          </button>
        ))}
        <button className="fieldInfo__addWorld">Welt hinzufügen</button>
      </>
    );
  }

  return <div className="fieldInfo">{content}</div>;
}

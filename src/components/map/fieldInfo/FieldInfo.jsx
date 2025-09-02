import "./fieldInfo.css";

export default function FieldInfo({ selectedField }) {
  if (!selectedField) return null;

  let content = null;

  if (selectedField.type == "Empty") {
    content = <p>Typ: Leere, Feld: {selectedField.number}</p>;
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
          <div key={i}>
            <h3>{world.name}</h3>
            <p>{world.tags.join(", ")}</p>
          </div>
        ))}
      </>
    );
  }

  return <div className="field-info">{content}</div>;
}

import "./infoBox.css";

export default function InfoBox({ selectedField }) {
  if (!selectedField) {
    return <div className="info-box" />;
  }

  let content = null;

  console.log(selectedField);

  switch (selectedField.type) {
    case "Empty":
      content = null;
      break;

    case "Black Hole":
      content = (
        <>
          <h2>{selectedField.title}</h2>
          <p>Typ: Schwarzes Loch, Feld: {selectedField.number}</p>
        </>
      );
      break;

    case "Star":
      content = (
        <>
          <h2>{selectedField.title}</h2>
          <p>Typ: Stern, Feld: {selectedField.number}</p>
          {selectedField.worlds.map((world, i) => (
            <div key={i}>
              <h3>{world.name}</h3>
              <p>{world.tags.join(", ")}</p>
            </div>
          ))}
        </>
      );
      break;

    default:
      content = <p>Unbekannter Objekttyp</p>;
  }

  return <div className="info-box">{content}</div>;
}

import "./worldInfo.css";
import { useSectorStore } from "../../utils/store";
import { SvgX, SvgPlus } from "../../utils/svgs";

export default function WorldInfo({ worldIndex }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const addWorldTag = useSectorStore((s) => s.addWorldTag);

  if (!sector || selectedFieldIndex == null) return null;

  const selectedField = sector.fields[selectedFieldIndex];
  const world = selectedField.worlds?.[worldIndex];

  if (!world) return null;

  const tags = world.tags.map((tag, index) => (
    <li className={`worldInfo__tag btn ${index < 2 ? "btn__disabled" : ""}`}>
      {tag}
      {index >= 2 && <SvgX />}
    </li>
  ));

  const plusBtn = (
    <button onClick={() => addWorldTag(selectedFieldIndex, worldIndex)}>
      <SvgPlus />
    </button>
  );

  return (
    <li key={selectedFieldIndex} className="worldInfo">
      <div className="worldInfo__title">
        <p>
          {selectedField.title} {world.titleNumber}
        </p>
        {plusBtn}
      </div>
      <ul className="worldInfo__tags">{tags}</ul>
    </li>
  );
}

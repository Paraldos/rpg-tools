import "./worldInfoBtn.css";
import { useSectorStore } from "../../utils/store";
import { SvgChevronUp, SvgChevronDown } from "../../utils/svgs";

export default function WorldInfoBtn({ worldIndex }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const setSelectedWorldIndex = useSectorStore((s) => s.setSelectedWorldIndex);
  const worldNumberUp = useSectorStore((s) => s.worldNumberUp);
  const worldNumberDown = useSectorStore((s) => s.worldNumberDown);

  if (!sector || selectedFieldIndex == null) return null;

  const selectedField = sector.fields[selectedFieldIndex];
  const world = selectedField.worlds?.[worldIndex];

  if (!world) return null;

  const tags = world.tags.map((tag, index) => (
    <li key={index} className={`worldInfoBtn__tag`}>
      {tag}
    </li>
  ));

  const titleNumber = worldIndex * 2 + world.titleOffset;

  return (
    <li key={selectedFieldIndex} className="worldInfoBtn">
      <button
        className="WorldInfoBtn__mainBtn"
        onClick={() => setSelectedWorldIndex([selectedFieldIndex, worldIndex])}
      >
        <p className="worldInfoBtn__title">
          {selectedField.title} {titleNumber}
        </p>
        <ul className="worldInfoBtn__tags">{tags}</ul>
      </button>
      <div className="worldInfoBtn__directionBtns">
        <button
          className="WorldInfoBtn__down"
          onClick={() => worldNumberDown(worldIndex)}
        >
          <SvgChevronUp />
        </button>
        <button
          className="WorldInfoBtn__up"
          onClick={() => worldNumberUp(worldIndex)}
        >
          <SvgChevronDown />
        </button>
      </div>
    </li>
  );
}

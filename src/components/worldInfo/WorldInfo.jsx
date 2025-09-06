import "./worldInfo.css";
import { useSectorStore } from "../../utils/store";
import { SvgX, SvgPlus } from "../../utils/svgs";

export default function WorldInfo({ worldIndex }) {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);

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
    <li className="worldInfo__tag btn">
      <SvgPlus />
    </li>
  );

  return (
    <li key={selectedFieldIndex} className="worldInfo">
      <p className="worldInfo__title">
        {selectedField.title} {world.titleNumber}
      </p>
      <ul className="worldInfo__tags">
        {tags} {plusBtn}
      </ul>
    </li>
  );
}

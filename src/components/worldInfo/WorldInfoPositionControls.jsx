import { SvgChevronRight, SvgChevronLeft } from "../svgs/Svgs";
import { useSectorStore } from "../../utils/store";

export default function WorldInfoPositionControls() {
  const moveWorldAwayFromSun = useSectorStore((s) => s.moveWorldAwayFromSun);
  const moveWorldTowardsSun = useSectorStore((s) => s.moveWorldTowardsSun);

  return (
    <div className="worldInfo__positionControlls">
      <p>Position</p>
      <button className="symbolBtn" onClick={moveWorldTowardsSun}>
        <SvgChevronLeft />
      </button>
      <button className="symbolBtn" onClick={moveWorldAwayFromSun}>
        <SvgChevronRight />
      </button>
    </div>
  );
}

import { SvgChevronRight, SvgChevronLeft, SvgX, SvgCheck } from "../svgs/Svgs";
import Modal from "../modal/Modal";
import { useState } from "react";
import { removeWorld } from "../../utils/fieldHelper";
import {
  moveWorldAwayFromSun,
  moveWorldTowardsSun,
} from "../../utils/worldHelper";

export default function WorldInfoPositionControls() {
  const [open, setOpen] = useState(false);

  return (
    <div className="worldInfo__positionControlls">
      <p>Position</p>
      <button className="symbolBtn" onClick={moveWorldTowardsSun}>
        <SvgChevronLeft />
      </button>
      <button className="symbolBtn" onClick={() => setOpen(true)}>
        <SvgX />
      </button>
      <button className="symbolBtn" onClick={moveWorldAwayFromSun}>
        <SvgChevronRight />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <p>Sicher dass du diese Welt löschen willst?</p>
        <div className="worldInfo__deleteBtns">
          <button className="symbolBtn" onClick={removeWorld}>
            <SvgCheck />
          </button>
          <button className="symbolBtn" onClick={() => setOpen(false)}>
            <SvgX />
          </button>
        </div>
      </Modal>
    </div>
  );
}

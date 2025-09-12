import { useSectorStore } from "../../utils/store";
import { SvgX, SvgTag, SvgCheck } from "../svgs/Svgs";
import Modal from "../modal/Modal";
import { useState } from "react";
import { addWorldTag } from "../../utils/sectorHelper";
import { removeWorld } from "../../utils/fieldHelper";

export default function WorldInfoControls() {
  const sector = useSectorStore((s) => s.sector);
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const [open, setOpen] = useState(false);

  if (!selectedWorldIndex) return null;

  const selectedField = sector.fields[selectedWorldIndex[0]];
  const selectedWorld = selectedField.worlds[selectedWorldIndex[1]];
  const tags = selectedWorld.tags;
  const noMoreTagsPossible = tags.length >= 8;

  return (
    <div className="worldInfo__controlls">
      <p>Aktionen</p>
      <button
        className={"symbolBtn"}
        onClick={addWorldTag}
        disabled={noMoreTagsPossible}
      >
        <SvgTag />
      </button>
      <button className="symbolBtn" onClick={() => setOpen(true)}>
        <SvgX />
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

import "./saveMenu.css";
import { useSectorStore } from "../../utils/store";
import { STORAGE_KEY_PREFIX } from "../../utils/storageHelper";
import { useEffect, useState } from "react";
import { saveToSlot, loadFromSlot, clearSlot } from "../../utils/storageHelper";
import XBtn from "../xBtn/XBtn";
import Modal from "../modal/Modal";
import { SvgX, SvgCheck } from "../svgs/Svgs";

export default function SaveMenu() {
  const selectedInfoMenu = useSectorStore((s) => s.selectedInfoMenu);
  if (selectedInfoMenu !== "SaveMenu") return null;
  return <SaveMenuInner />;
}

function SaveMenuInner() {
  const sector = useSectorStore((s) => s.sector);
  const saveMenuOpen = useSectorStore((s) => s.saveMenuOpen);
  const toggleSaveMenu = useSectorStore((s) => s.toggleSaveMenu);
  const [slotInfos, setSlotInfos] = useState(Array(5).fill(null));
  const [open, setOpen] = useState(false);

  const refresh = () => {
    setSlotInfos(
      Array.from({ length: 5 }, (_, i) => {
        const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${i}`);
        return raw ? JSON.parse(raw) : null;
      })
    );
  };

  useEffect(() => {
    refresh();
  }, [saveMenuOpen]);

  const btnAgreeToDelete = (
    <button
      className="symbolBtn"
      onClick={() => {
        clearSlot(slotIndex);
        refresh();
      }}
    >
      <SvgCheck />
    </button>
  );

  const modal = (
    <Modal open={open} onClose={() => setOpen(false)}>
      <p>Sicher dass du diesen Speicherstand löschen willst?</p>
      <div className="saveMenu__modalBtns">
        {btnAgreeToDelete}
        <button className="symbolBtn" onClick={() => setOpen(false)}>
          <SvgX />
        </button>
      </div>
    </Modal>
  );

  const generateSlot = (slotIndex) => {
    const parsed = slotInfos[slotIndex];
    const timeStamp = parsed
      ? `(${new Date(parsed.timestamp).toLocaleString()})`
      : "(leer)";

    const btnSpeichern = (
      <button
        onClick={() => {
          saveToSlot(slotIndex);
          refresh();
        }}
        disabled={!sector}
      >
        Speichern
      </button>
    );

    const btnLaden = (
      <button onClick={() => loadFromSlot(slotIndex)} disabled={!parsed}>
        Laden
      </button>
    );

    const btnDelete = (
      <button onClick={() => setOpen(true)} disabled={!parsed}>
        Löschen
      </button>
    );

    return (
      <li key={slotIndex} className="saveMenu__listItem">
        <div className="saveMenu__title">
          <p>Slot {slotIndex + 1}</p>
          <p>{timeStamp}</p>
        </div>
        <div className="saveMenu__btns">
          {btnSpeichern}
          {btnLaden}
          {btnDelete}
        </div>
      </li>
    );
  };

  return (
    <div className="saveMenu">
      <XBtn onClick={toggleSaveMenu} />
      <h3>Laden und Speichern</h3>
      <ul className="saveMenu__list">
        {Array.from({ length: 5 }, (_, i) => generateSlot(i))}
      </ul>
      {modal}
    </div>
  );
}

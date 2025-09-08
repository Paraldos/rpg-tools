import { createPortal } from "react-dom";
import XBtn from "../xBtn/XBtn";
import "./modal.css";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return createPortal(
    <div className="modal__backdrop" onClick={onClose}>
      <div className="modal__window" onClick={(e) => e.stopPropagation()}>
        <XBtn onClick={onClose} />
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

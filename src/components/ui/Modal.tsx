import React from "react";
import "../../style.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="msc-modal-overlay" onClick={onClose}>
      <div className="msc-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="msc-modal-close" onClick={onClose}>
          &times;
        </button>
        {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
        {children}
      </div>
    </div>
  );
};

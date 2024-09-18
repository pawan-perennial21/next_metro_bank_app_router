import React, { FC, ReactNode } from "react";
import CrossIcon from "../icons/CrossIcon";
import { Typography } from ".";
import { IModal } from "../interface";

const Modal: FC<IModal> = ({
  isOpen,
  title = "Transaction Details",
  icon = <CrossIcon />,
  content = "",
  onClose,
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`modal-container ${isOpen && "modal-open"}`}>
      <div className="modal-box">
        <div className="modal-header">
          <Typography variant="h5" color="#232F34">
            {title}
          </Typography>
          <div className="modal-close-button" onClick={handleClose}>
            {icon}
          </div>
        </div>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

const ModalWrapper = ({ isClicked }) => {
  const modalAddClass = isClicked ? " modal-open" : "";
  console.log(isClicked);

  return (
    <>
      {isClicked ? (
        ReactDOM.createPortal(
          <div className={`modal-wrapper${modalAddClass}`}>
            <Modal />
          </div>,
          document.getElementById("overlay-root")
        )
      ) : (
        <div className="modal-wrapper">
          <Modal />
        </div>
      )}
    </>
  );
};

export default ModalWrapper;

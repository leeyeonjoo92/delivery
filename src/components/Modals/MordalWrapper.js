import React from "react";
import ReactDOM from "react-dom";
import Mordal from "./Mordal";

const MordalWrapper = ({ isClicked }) => {
  return (
    <>
      {isClicked ? (
        ReactDOM.createPortal(
          <Mordal />,
          document.getElementById("overlay-root")
        )
      ) : (
        <Mordal />
      )}
    </>
  );
};

export default MordalWrapper;

import React, { useContext } from "react";
import { AppContext } from "../../AppContext/AppContextProvider";

const FourthLight = () => {
  const { fourthLight, setFourthLight, fourthColorScreenClick } = useContext(
    AppContext
  );
  const fourthLightClick = () => {
    setFourthLight(!fourthLight);
  };
  return (
    <>
      <div
        className={
          fourthLight
            ? "fourth-div half-size center-button"
            : "half-size center-button"
        }
      >
        <button className="btn box-shadow" onClick={fourthLightClick}>
          Fourth light
        </button>
        <button
          className="btn box-shadow"
          onClick={() => {
            fourthColorScreenClick();
          }}
        >
          Fourth color screen
        </button>
      </div>
    </>
  );
};

export default FourthLight;

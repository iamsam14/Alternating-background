import React, { useContext } from "react";
import { AppContext } from "../../AppContext/AppContextProvider";

const SecondLight = () => {
  const { secondLight, setSecondLight, secondColorScreenClick } = useContext(
    AppContext
  );
  const secondLightClick = () => {
    setSecondLight(!secondLight);
  };

  return (
    <div
      className={
        secondLight
          ? "second-div half-size center-button"
          : "center-button half-size"
      }
    >
      <button className="btn box-shadow" onClick={secondLightClick}>
        Second light
      </button>
      <button
        className="btn box-shadow"
        onClick={() => secondColorScreenClick()}
      >
        Second color screen
      </button>
    </div>
  );
};

export default SecondLight;

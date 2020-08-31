import React, { useContext } from "react";
import SecondLight from "./SecondLight";
import { AppContext } from "../../AppContext/AppContextProvider";

const FirstLight = () => {
  const {
    firstLight,
    setFirstLight,
    firstColorScreen,
    secondColorScreen,
    thirdColorScreen,
    fourthColorScreen,
    firstColorScreenClick,
  } = useContext(AppContext);
  const firstLightclicked = () => {
    setFirstLight(!firstLight);
    console.log("localfile");
  };

  return (
    <div
      className={
        firstColorScreen
          ? "first-color-screen flex-container"
          : secondColorScreen
          ? "second-color-screen flex-container"
          : thirdColorScreen
          ? "third-color-screen flex-container"
          : fourthColorScreen
          ? "fourth-color-screen flex-container"
          : "black flex-container"
      }
    >
      <div
        id="button"
        className={
          firstLight
            ? "first-div half-size center-button"
            : "center-button half-size"
        }
      >
        <button className="btn box-shadow" onClick={firstLightclicked}>
          First light
        </button>
        <button
          className="btn box-shadow"
          onClick={() => firstColorScreenClick()}
        >
          First color screen
        </button>
      </div>
      <SecondLight />
    </div>
  );
};

export default FirstLight;

import React, { useContext } from "react";
import { AppContext } from "../../AppContext/AppContextProvider";
import FourthLight from "./FourthLight";

const ThirdLight = () => {
  const {
    thirdLight,
    setThirdLight,
    firstColorScreen,
    secondColorScreen,
    thirdColorScreen,
    fourthColorScreen,
    thirdColorScreenClick,
  } = useContext(AppContext);

  const thirdLightClick = () => {
    setThirdLight(!thirdLight);
    console.log("localfile");
  };
  return (
    <>
      {/* "flex-container" */}
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
          className={
            thirdLight
              ? "third-div half-size center-button"
              : "half-size center-button"
          }
        >
          <button className="btn box-shadow" onClick={thirdLightClick}>
            Third light
          </button>
          <button
            className="btn box-shadow"
            onClick={() => {
              thirdColorScreenClick();
            }}
          >
            Third color screen
          </button>
        </div>
        <FourthLight />
      </div>
    </>
  );
};

export default ThirdLight;

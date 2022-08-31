import { AppContext } from '../../AppContext/AppContextProvider';
import FourthLight from './FourthLight';
import React, { useContext } from 'react';

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
  };
  return (
    <>
      <div
        className={
          firstColorScreen
            ? 'red-color flex-container'
            : secondColorScreen
            ? 'yellow-color flex-container'
            : thirdColorScreen
            ? 'green-color flex-container'
            : fourthColorScreen
            ? 'blue-color flex-container'
            : 'flex-container'
        }
      >
        <div
          className={
            thirdLight
              ? 'green-color half-size center-button'
              : 'half-size center-button'
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

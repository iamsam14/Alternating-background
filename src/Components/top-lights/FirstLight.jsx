import { AppContext } from '../../AppContext/AppContextProvider';
import React, { useContext } from 'react';
import SecondLight from './SecondLight';

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
  };

  return (
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
          firstLight
            ? 'red-color half-size center-button'
            : 'center-button half-size'
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

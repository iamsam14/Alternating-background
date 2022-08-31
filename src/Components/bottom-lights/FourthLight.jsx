import { AppContext } from '../../AppContext/AppContextProvider';
import React, { useContext } from 'react';

const FourthLight = () => {
  const { fourthLight, setFourthLight, fourthColorScreenClick } =
    useContext(AppContext);

  const fourthLightClick = () => {
    setFourthLight(!fourthLight);
  };

  return (
    <>
      <div
        className={
          fourthLight
            ? 'blue-color half-size center-button'
            : 'half-size center-button'
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

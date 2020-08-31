import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [firstLight, setFirstLight] = useState(false);
  const [secondLight, setSecondLight] = useState(false);
  const [thirdLight, setThirdLight] = useState(false);
  const [fourthLight, setFourthLight] = useState(false);
  const [firstColorScreen, setFirstColorScreen] = useState(false);
  const [secondColorScreen, setSecondColorScreen] = useState(false);
  const [thirdColorScreen, setThirdColorScreen] = useState(false);
  const [fourthColorScreen, setFourthColorScreen] = useState(false);

  const firstColorScreenClick = () => {
    setFirstColorScreen(!firstColorScreen);
    setSecondColorScreen(false);
    setThirdColorScreen(false);
    setFourthColorScreen(false);
    setFirstLight(false);
    setSecondLight(false);
    setThirdLight(false);
    setFourthLight(false);
    console.log("appcontext");
  };

  const secondColorScreenClick = () => {
    setFirstColorScreen(false);
    setSecondColorScreen(!secondColorScreen);
    setThirdColorScreen(false);
    setFourthColorScreen(false);
    setFirstLight(false);
    setSecondLight(false);
    setThirdLight(false);
    setFourthLight(false);
    console.log("appcontext");
  };

  const thirdColorScreenClick = () => {
    setFirstColorScreen(false);
    setSecondColorScreen(false);
    setThirdColorScreen(!thirdColorScreen);
    setFourthColorScreen(false);
    setFirstLight(false);
    setSecondLight(false);
    setThirdLight(false);
    setFourthLight(false);
    console.log("appcontext");
  };

  const fourthColorScreenClick = () => {
    setFirstColorScreen(false);
    setSecondColorScreen(false);
    setThirdColorScreen(false);
    setFourthColorScreen(!fourthColorScreen);
    setFirstLight(false);
    setSecondLight(false);
    setThirdLight(false);
    setFourthLight(false);
    console.log("appcontext");
  };

  return (
    <AppContext.Provider
      value={{
        firstLight,
        setFirstLight,
        secondLight,
        setSecondLight,
        thirdLight,
        setThirdLight,
        fourthLight,
        setFourthLight,
        firstColorScreen,
        firstColorScreenClick,
        secondColorScreen,
        secondColorScreenClick,
        thirdColorScreen,
        thirdColorScreenClick,
        fourthColorScreen,
        fourthColorScreenClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

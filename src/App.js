import React from "react";
import FirstLight from "./Components/top-lights/FirstLight";
import ThirdLight from "./Components/bottom-lights/ThirdLight";
import { AppContextProvider } from "./AppContext/AppContextProvider";
import "./index.css";

function App() {
  return (
    <AppContextProvider>
      <FirstLight />
      <ThirdLight />
    </AppContextProvider>
  );
}

export default App;

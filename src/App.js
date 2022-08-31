import './index.css';
import { AppContextProvider } from './AppContext/AppContextProvider';
import FirstLight from './Components/top-lights/FirstLight';
import React from 'react';
import ThirdLight from './Components/bottom-lights/ThirdLight';

function App() {
  return (
    <AppContextProvider>
      <FirstLight />
      <ThirdLight />
    </AppContextProvider>
  );
}

export default App;

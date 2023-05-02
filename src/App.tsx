import React from 'react';
import './App.css';
import { Attribution } from './components/Attribution';
import { ReactLogo } from './components/ReactLogo';
import { Main } from './components/Main';

function App() {
  return (<>
            <Main />
            <Attribution />
            <ReactLogo />
          </>

  );
}

export default App;

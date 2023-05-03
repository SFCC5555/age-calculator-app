import React from 'react';
import './App.css';
import { Attribution } from './components/Attribution';
import { ReactLogo } from './components/ReactLogo';
import { Main } from './components/Main';

function App() {
  return (<>
            <h1 className='title'><span className='colorTitle'>AGE </span>CALCULATOR</h1>
            <Main />
            <Attribution />
            <ReactLogo />
          </>

  );
}

export default App;

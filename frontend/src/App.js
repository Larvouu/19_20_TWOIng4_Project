//INDENTER CODE
// SHIFT + ALT + Fimport React from 'react';
import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import PageContent from './Component/PageContent/PageContent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<div id="firstRow">
        <Navbar/>
      </div>*/}
      <PageContent/>
    </div>
  );
}

export default App;

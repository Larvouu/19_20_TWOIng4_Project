//INDENTER CODE
// SHIFT + ALT + Fimport React from 'react';
import React from 'react';
import PageContent from './Component/PageContent/PageContent';
import './App.css';
// #DFFDFD mentholé
import Routes from './routes';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ol>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/admin">admin</Link></li>
          </ol>
        </nav>
      {/*<PageContent/>*/}
      </header>
      <Routes/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Info from './components/Info/Info.js';
import Ribbons from './components/Ribbons/Ribbons.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Page">
          <Info/>
          <Ribbons/>
        </div>
      </div>
    );
  }
}

export default App;

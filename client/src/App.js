import React, { Component } from 'react';

// Components
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="big-wrapper">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Sidebar from './Components/Sidebar';
import Saved from './Components/Saved';
import Latest from './Components/Latest';
import Results from './Components/Results';

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div id="big-wrapper">
        <Sidebar />
        <Route exact path="/" component={Latest} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/latest" component={Latest} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;

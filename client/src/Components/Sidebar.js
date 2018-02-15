import React, { Component } from 'react';

// Components
import Search from './Search';

// CSS
import './Sidebar.css';
import nytlogo from '../Assets/imgs/nyt_logo.png';

class Sidebar extends Component {
  render() {
    return (
        <header>
        
            <nav className="navbar navbar-dark">
                <a className="navbar-brand" href="#">
                    <img id="nyt_logo" src={nytlogo} alt="NY Times Logo" />
                </a>
                <Search />
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Saved Articles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Latest Articles</a>
                    </li>
                </ul>

            </nav>
            <p id="nytDisclaimer">Powered by The New York Times API</p>
        </header>
    );
  }
}

export default Sidebar;
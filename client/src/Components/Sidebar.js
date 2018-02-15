import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                <NavLink className="navbar-brand" to="/">
                    <img id="nyt_logo" src={nytlogo} alt="NY Times Logo" />
                </NavLink>
                <Search />
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/saved">Saved Articles</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/latest">Latest Articles</NavLink>
                    </li>
                </ul>

            </nav>
            <p id="nytDisclaimer">Powered by The New York Times API</p>
        </header>
    );
  }
}

export default Sidebar;
import React, { Component } from 'react';

// CSS
import './Sidebar.css';
import nytlogo from '../Assets/imgs/nyt_logo.png';

class Sidebar extends Component {
  render() {
    return (
        <header class="bg-dark">
        
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img id="nyt_logo" src={nytlogo} alt="NY Times Logo" />
                </a>
                <div class="container">
                    <form>
                        <div class="form-group">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" /> 
                        </div>
                        
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Saved Articles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Latest Articles</a>
                    </li>
                </ul>

            </nav>
            <p id="nytDisclaimer">Powered by The New York Times API</p>
        </header>
    );
  }
}

export default Sidebar;
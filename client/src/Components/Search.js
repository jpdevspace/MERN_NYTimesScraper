import React, { Component } from 'react';

class Search extends Component {
    render() {
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" /> 
                    </div>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Search;

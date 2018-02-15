import React, { Component } from 'react';

class Search extends Component {
    render() {
        return(
            <div class="container">
                <form>
                    <div class="form-group">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search" /> 
                    </div>
                    
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Search;

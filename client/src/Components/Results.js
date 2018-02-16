import React, { Component } from 'react';
// Components
import Search from './Search';

class Results extends Component {
  render() {
    return (
        <section>
            <h1>Results</h1>
            <Search />
        </section>
    );
  }
}

export default Results;
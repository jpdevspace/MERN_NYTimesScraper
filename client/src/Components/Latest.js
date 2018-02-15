import React, { Component } from 'react';

import API from '../utils/API';

class Latest extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        API.getLatestNews()
            .then(response => this.setState({ articles: response.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <section>
                <h1>Latest</h1>
                <ul>
                    {this.state.articles.map((item, i) => {
                        return (
                        <div key={i}>
                            <li>Title: {item.title}</li>
                            <li>Abstract: {item.abstract}</li>
                            <li>URL: {item.url}</li>
                           
                            <hr />
                        </div>
                        )
                    })}
                </ul>
            </section>
        );
    }
}

export default Latest;
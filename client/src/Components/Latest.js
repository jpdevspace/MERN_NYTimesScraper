import React, { Component } from 'react';

// Components
import Article from './Article';

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

    handleSave = () => {
        console.log("Saving!");
        // const article = {
        //     url: this.state.url,
        //     title: this.state.title,
        //     abstract: this.state.abstract
        // }

        // API.saveArticle(article);
    }

    render() {
        return (
            <section>
                <h1>Latest</h1>
                <ul>
                    {this.state.articles.map((item, i) => {
                        return (
                            <Article 
                                key={i}
                                title={item.title}
                                abstract={item.abstract}
                                url={item.url}
                                type="save"
                            />
                        )
                    })}
                </ul>
            </section>
        );
    }
}

export default Latest;
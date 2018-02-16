import React, { Component } from 'react';

// Components
import Article from './Article';

import API from '../utils/API';

class Latest extends Component {
    // Set state with articles from the NYTimes API
    state = { articles: [] };
    
    // Get the latest news from the NYTimes API
    componentDidMount() {
        API.getLatestNews()
            .then(response => this.setState({ articles: response.data }))
            .catch(err => console.log(err));
    }
    
    // Function to save articles into Database
    handleSave = () => {
        console.log(this.state.articles);
        console.log("Saving!");
        const article = {
            url: this.state.articles.url,
            title: this.state.articles.title,
            abstract: this.state.articles.abstract
        }
        console.log(article);
        //API.saveArticle(article);
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
                                saveArticle={this.handleSave}
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
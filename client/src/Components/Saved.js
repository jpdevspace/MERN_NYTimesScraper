import React, { Component } from 'react';

// Components 
import Article from './Article';
import API from '../utils/API';


class Saved extends Component {
    // Set state with the docs from the Database
    state = { articles: [] };

    // Get all records from Database
    componentDidMount() {
        API.getSavedArticles()
            .then(response => this.setState({ articles: response.data }))
            .catch(err => console.log(err));
    }

    handleRemove = id => {
        // Remove from DB
        API.removeArticle(id);
        // Remove from frontend (set new state)
        let newArticles = this.state.articles.filter(x => x._id !== id)
        this.setState({ articles: newArticles })
    }

    render() {
        let singleArticle = this.state.articles.map(item => {
            return (
                <Article
                    key={item._id}
                    title={item.title}
                    abstract={item.abstract}
                    url={item.url}
                    removeArticle={() => this.handleRemove(item._id)}
                    type="remove"
                />
            )
        })

        return (
            <section>
                <h1>Saved</h1>
                <ul>{singleArticle}</ul>
            </section>
        );
    }
}

export default Saved;
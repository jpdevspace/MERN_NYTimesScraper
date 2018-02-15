import React, { Component } from 'react';
import API from '../utils/API';



// CSS
import './Article.css';

class Article extends Component {

    state = {
        url: this.props.url,
        title: this.props.title,
        abstract: this.props.abstract
    }

    handleSave = () => {
        console.log("I'm Working");
        const article = {
            url: this.state.url,
            title: this.state.title,
            abstract: this.state.abstract
        }

        API.saveArticle(article);
    }

    render() {
        return (
            <li className="article">
                <div className="article-title">
                    <a href={this.state.url} target="_blank">
                        <h6>{this.state.title}</h6>
                    </a>
                    <div className="article-save" onClick={this.handleSave} >
                        <i className="far fa-save fa-2x"></i>
                    </div>
                </div>
                <div className="article-body">
                    <p>{this.state.abstract}</p>
                </div>
            </li>
        );
    }
}

export default Article;
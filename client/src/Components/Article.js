import React, { Component } from 'react';

// Components
import SaveArticle from './SaveArticle';

// CSS
import './Article.css';

class Article extends Component {
    render() {
        return (
            <li className="article">
                <div className="article-title">
                    <a href={this.props.url} target="_blank">
                        <h6>{this.props.title}</h6>
                    </a>
                    <SaveArticle className="article-save"/>
                </div>
                <div className="article-body">
                    <p>{this.props.abstract}</p>
                </div>
            </li>
        );
    }
}

export default Article;
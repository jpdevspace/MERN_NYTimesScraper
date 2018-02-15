import React, { Component } from 'react';

class SavedArticle extends Component {

    handleSave = () => {
        console.log("I'm Working");
    }

    render() {
        return (
           
            <div onClick={this.handleSave} >
                <i className="far fa-save fa-2x"></i>
            </div>
        );
    }
}

export default SavedArticle;
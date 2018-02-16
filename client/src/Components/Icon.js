import React from 'react';

const Icon = props => {
    return (
        <div id="article-options">
            {
                props.type === 'save' 
                ? 
                    <span >
                        <i className="far fa-save fa-2x"></i>
                    </span>
                : 
                    <span onClick={props.removeArticle}>
                        <i className="fas fa-trash fa-lg"></i>
                    </span>
            }
        </div>
        
    );
}

export default Icon;

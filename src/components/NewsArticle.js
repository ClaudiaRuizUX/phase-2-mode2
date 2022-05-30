import React from 'react';

const SavedArticle =({article}) => (
    <div className="col s4">
        <div className="card">
            <div className="card-image">  
                <img src={article.urlToImage} alt={article.title} />
                <span className="card-title">{article.source.name}</span>
            </div>
            <div className="card-content">
                <p>{article.title}</p>
            </div>
            <div className="card-action">
                <a href={article.url} target="_blank" rel="noreferrer">Read Article</a>
                <a href="/">Save for Later</a>
                {/* <a href="/" onClick={passArticleDetails}>Save for Later</a> */}
            </div>
        </div>
    </div>
);     

export default SavedArticle;

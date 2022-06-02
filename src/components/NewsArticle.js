import React, { useState } from 'react';

const NewsArticle = (props) => {
    const {article, onBookmark} = props;
    //const [article, setArticle] = useState({title: article.title});

   
    return (
        <>
         <p>{article.title}</p>
         <button onClick={()=> onBookmark(article)}>Bookmark</button>
        </>  
    );
      
};  

export default NewsArticle;












/* <div className="col s4">
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
                    <button onClick={onBookmark}>Bookmark</button>
                </div>
            </div>
        </div> */



 // const [saveDetails, setSaveDetails] = useState({
    //     title: article.title,
    //     date: article.publishedAt,
    //     link: article.url
    // })
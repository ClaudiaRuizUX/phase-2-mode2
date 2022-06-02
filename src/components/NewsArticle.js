import React from 'react';

const NewsArticle = (props) => {
    const { title,
            img,
            url,
            date,
            saveArticle} = props;
    return (
        <>
        <div className="col s4">
        <div className="card">
        <div className="card-image">  
            <img src={img} alt={title} />
        </div>
        <div className="card-content">
            <p>{title}</p>
        </div>
        <div className="card-action">
            <a href={url} target="_blank" rel="noreferrer">Read Article</a>
            <button onClick={()=> saveArticle({
             title:title,
             img:img,
             url:url,
             date:date,
         })}>Bookmark</button>
        </div>
        </div>
        </div>
        <p>{title}</p>
        </>  
    );
      
};  

export default NewsArticle;

import React from 'react';

const NewsArticle = (props) => {
    const { title,
            img,
            url,
            date,
            saveArticle} = props;
    return (
        <>
        <div className="hoverable col s12">
            
            <div className="card shadow">
            <a href={url} target="_blank" rel="noreferrer">
            <div className="card-image">  
                <img src={img} alt={title} />
            </div>
            <div className="card-content">
                <h6>{title}</h6>
            </div>
            </a>
            <div className="card-action">
                <button class="waves-effect waves-light btn-flat" onClick={()=> saveArticle({
                title:title,
                url:url,
                date:date,
                })}><i class="material-icons left">bookmark</i>Bookmark</button>
            </div>
            </div>
            
        </div>
        </>  
    );
      
};  

export default NewsArticle;

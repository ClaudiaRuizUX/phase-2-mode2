import React from 'react';

const NewsArticle = (props) => {
    const { title,
            img,
            url,
            date,
            saveArticle} = props;
    return (
        <>
        <div className="card hoverable col s6">
            <div>
            <div className="card-image">  
                <img src={img} alt={title} />
            </div>
            <div className="card-content">
                <p>{title}</p>
            </div>
            <div className="card-action">
                <a style={{color: "blue"}} href={url} target="_blank" rel="noreferrer">Read Article</a>
                <button class="waves-effect waves-light btn blue" onClick={()=> saveArticle({
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

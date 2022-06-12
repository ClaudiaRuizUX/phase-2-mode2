import React from 'react';

const NewsArticle = (props) => {
    const { title,
            img,
            url,
            date,
            saveArticle} = props;
    return (
        <>
        <div className="card hoverable col s12">
            
            <div className="card blue-grey lighten-5">
            <a href={url} target="_blank" rel="noreferrer">
            <div className="card-image">  
                <img src={img} alt={title} />
            </div>
            <div className="card-content">
                <h5>{title}</h5>
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

import React from 'react';

function SavedArticle (props) {
    const { title, url, date, id, deleteArticle} = props;
    
    return (
        <>
          <div className="card">
            <div className="card-content">
                <p>{title}, {date}</p>
            </div>
            <div className="card-action">
                <a href={url} target="_blank" rel="noreferrer">Read Article</a>
                <button onClick={()=> deleteArticle(id)}>Remove</button>
            </div>
          </div>
            <p>{title}</p>
        </>  
    );
      
  };  

export default SavedArticle;

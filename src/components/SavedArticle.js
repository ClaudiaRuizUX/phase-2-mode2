import React from 'react';

function SavedArticle (props) {
    const { title, url, date, id, deleteArticle} = props;
    
    return (
        <>
          <div className="card" style={{"background-color": "#e3f2fd"}}>
            <div className="card-content">
                <h5>{title}</h5> 
                <p>{date}</p>
            </div>
            <div className="card-action">
                <a style={{color: "blue"}} href={url} target="_blank" rel="noreferrer">Read Article</a>
                <button class="waves-effect waves-light btn-flat" onClick={()=> deleteArticle(id)}>
                <i class="material-icons left icon-large">delete</i>Remove</button>
            </div>
          </div>
        </>  
    );
      
  };  

export default SavedArticle;

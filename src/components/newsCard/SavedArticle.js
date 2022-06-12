import React from 'react';

function SavedArticle (props) {
    const { title, url, date, id, deleteArticle} = props;
    
    return (
        <>
          <div className="card hoverable" style={{"background-color": "#e3f2fd"}}>
            <a href={url} target="_blank" rel="noreferrer">
              <div className="card-content">
                  <h6>{title}</h6> 
                  <p>{date}</p>
              </div>
            </a>
            <div className="card-action">
                <button class="waves-effect waves-light btn-flat" onClick={()=> deleteArticle(id)}>
                <i class="material-icons left icon-large">delete</i>Remove</button>
            </div>
          </div>
        </>  
    );
      
  };  

export default SavedArticle;

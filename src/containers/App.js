import React, { useState, useEffect } from 'react';
// import NewsShowcase from '../components/NewsShowcase';
// import BookmarkArticle from '../components/BookmarkArticle'; 
import '../App.css';

  function App() {
    //const [articleList, setArticleList] = useState([]);
    const [savedList, setSavedList] = useState([]);
    

  // function getArticleListAPI() {
  //   return fetch('http://localhost:3001/articles')
  //     .then(res => res.json())
  //     .then(data => data);
  // };

  function getSavedListAPI() {
    return fetch('http://localhost:3002/savedArticles')
      .then(res => res.json())
      .then(data => data);
  };

  function deleteSavedArticleAPI(id) {
    return fetch(`http://localhost:3002/savedArticles/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => data);
  }

  // useEffect(() => {
  //   getArticleListAPI()
  //     .then(articleList => setArticleList(articleList));
  // }, [])

  useEffect(() => {
    getSavedListAPI()
      .then(savedList => setSavedList(savedList));
  }, [])

  

  // const saveArticle = (article) => {
  //   return fetch('http://localhost:3002/savedArticles', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json'
  //         },
  //         body: JSON.stringify(article)
  //   }).then(res => res.json())
  //     .then(data => {
  //       setArticleList([...articleList, data])
  //     })
  // };
  
  
  const deleteArticle = (id) => {
    return deleteSavedArticleAPI(id)
    .then(() => {
      setSavedList(savedList.filter(savedArticle => savedArticle.id !== id))
    })
  }

  return (
    <div>
      {savedList.map((savedArticle =>
        <SavedArticle key={savedArticle.url} title={savedArticle.title} 
        url={savedArticle.url} date={savedArticle.date} id={savedArticle.id} deleteArticle={deleteArticle} />
        ))
      }
    </div> 
  )
}

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
                <button onClick={()=> deleteArticle(id)}>deleteeee</button>
            </div>
          </div>
            <p>{title}</p>

        </>  
    );
      
  };


export default App;


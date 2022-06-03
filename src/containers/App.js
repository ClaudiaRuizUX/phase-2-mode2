import React, { useState, useEffect } from 'react';
import NewsShowcase from '../components/NewsShowcase';
import BookmarkShowcase from '../components/BookmarkShowcase';


import '../App.css';

  function App() {
    const [articleList, setArticleList] = useState([]);
    const [savedList, setSavedList] = useState([]);
    

  function getArticleListAPI() {
    return fetch('http://localhost:3001/articles')
      .then(res => res.json())
      .then(data => data);
  };

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

  useEffect(() => {
    getArticleListAPI()
      .then(articleList => setArticleList(articleList));
  }, [])

  useEffect(() => {
    getSavedListAPI()
      .then(savedList => setSavedList(savedList));
  })

  

  const saveArticle = (article) => {
    return fetch('http://localhost:3002/savedArticles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(article)
    }).then(res => res.json())
      .then(data => {
        setArticleList([...articleList, data])
      })
  };
  
  
  const deleteArticle = (id) => {
    return deleteSavedArticleAPI(id)
    .then(() => {
      setSavedList(savedList.filter(savedArticle => savedArticle.id !== id))
    })
  }


  return (
    <>
    <h1>Crypto Tracker</h1>
    <div className="container-fluid">
      <div className="row">
          <div className="col s8">
            <h3>Crypto News | Finance | Regulation | Prices</h3>
          <NewsShowcase articleList={articleList} saveArticle={saveArticle} />
          </div>
          <div className="row">
            <div className="col s4">
              <h4><i class="material-icons small left">bookmark_border</i>Bookmarks</h4>
            <BookmarkShowcase savedList={savedList} deleteArticle={deleteArticle} />
          </div>
          </div>
      </div>
    </div>
    </> 
  )
 }

export default App;


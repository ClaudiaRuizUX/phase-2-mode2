import React, { useState, useEffect } from 'react';
import { getArticleListAPI, getSavedListAPI, deleteSavedArticleAPI } from '../apis/news';
import NavBar from './NavBar';
import NewsArticle from './NewsArticle';
import BookmarkShowcase from './BookmarkShowcase';

const CryptoShowcase = () => {
  const [articleList, setArticleList] = useState([]);
  const [savedList, setSavedList] = useState([]);


  useEffect(() => {
    getArticleListAPI("crypto")
      .then(articleList => setArticleList(articleList));
  },[])

  useEffect(() => {
    getSavedListAPI()
      .then(savedList => setSavedList(savedList));
  },[])

  const deleteArticle = (id) => {
    return deleteSavedArticleAPI(id)
    .then(() => {
      setSavedList(savedList.filter(savedArticle => savedArticle.id !== id))
    })
  }

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
      .then (getSavedListAPI()
      .then(savedList => setSavedList(savedList)))
  };

    return (
  <>
  <h1>Crypto Tracker</h1>  
    <NavBar /> 
    <h3>Crypto</h3>  
      <div className="container-fluid">
        <div className="row">
          <div className="col s8 cards-container">
            {articleList.map((article =>
                <NewsArticle 
                key={article.url} title={article.title} img={article.urlToImage}
                url={article.url} date={article.publishedAt} saveArticle={saveArticle}/>
                ))
            }
          </div>
          <div className="col s4">
            <h4><i className="material-icons small left">bookmark_border</i>Bookmarks</h4>
            <BookmarkShowcase savedList={savedList} deleteArticle={deleteArticle} />
          </div>
        </div>
      </div>
  </>
    );
};

export default CryptoShowcase;
import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';
import BookmarkShowcase from './BookmarkShowcase';
import NavBar from './NavBar';

const FinanceShowcase = (props) => {
  const [articleList, setArticleList] = useState([]);
  const [savedList, setSavedList] = useState([]);

  function getArticleListAPI() {
    return fetch('https://newsapi.org/v2/everything?q=finance&from=2022-05-25&sortBy=publishedAt&apiKey=ccf2290e603243e3abf153def8f8ce3f')
      .then(res => res.json())
      .then(data => data.articles);
  };

  useEffect(() => {
    getArticleListAPI()
      .then(articleList => setArticleList(articleList));
  },[])

  function getSavedListAPI() {
    return fetch('http://localhost:3002/savedArticles')
      .then(res => res.json())
      .then(data => data);
  };
  useEffect(() => {
    getSavedListAPI()
      .then(savedList => setSavedList(savedList));
  },[])

  function deleteSavedArticleAPI(id) {
    return fetch(`http://localhost:3002/savedArticles/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => data);
  }

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
  };
  
    return (
    <>  
      <h1>Crypto Tracker</h1>
      <NavBar />    
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
    )
};

export default FinanceShowcase;
import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';
import BookmarkShowcase from './BookmarkShowcase';
import NavBar from './NavBar';

const CryptoShowcase = (props) => {
  const {saveArticle, savedList, deleteArticle } = props;
  const [articleList, setArticleList] = useState([]);

  function getArticleListAPI() {
    return fetch('https://newsapi.org/v2/everything?q=crypto&from=2022-05-25&sortBy=publishedAt&apiKey=ccf2290e603243e3abf153def8f8ce3f')
    // return fetch('http://localhost:3001/articles')
      .then(res => res.json())
      .then(data => data.articles);
  };

  useEffect(() => {
    getArticleListAPI()
      .then(articleList => setArticleList(articleList));
  },[])

    return (
  <>  
    <h1>Crypto Tracker</h1>
    <NavBar />  
      <div className="container-fluid">
        <div className="row">
          <div className="col s8">
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
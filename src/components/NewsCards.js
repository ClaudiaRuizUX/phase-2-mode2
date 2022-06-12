import React, { useState, useEffect } from 'react';
import { getArticleListAPI, getSavedListAPI, deleteSavedArticleAPI } from '../apis/news';
import NewsArticle from './newsCard/NewsArticle';
import BookmarkCards from './BookmarkCards';

const NewsCards = (props) => {
  const [articleList, setArticleList] = useState([]);
  const [savedList, setSavedList] = useState([]);
  const {subject} = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    setLoading(true);
    getArticleListAPI(subject)
      .then(articleList => setArticleList(articleList))
      .then(() => setLoading(false))
      .catch(setError)
   },[subject])

  useEffect(() => {
    setLoading(true);
    getSavedListAPI()
      .then(savedList => setSavedList(savedList))
      .catch(setError)
  },[])



  const deleteArticle = (id) => {
    setLoading(true);
    return deleteSavedArticleAPI(id)
    .then(() => {
      setSavedList(savedList.filter(savedArticle => savedArticle.id !== id))
      .catch(setError)
    })
  }

  const saveArticle = (article) => {
    setLoading(true);
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
      .catch(setError)
  };

  if (loading) return <h1> Loading...</h1>;

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }


  if (articleList) {
    return (
      <>
        <h3>{subject} news</h3>  
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
                <BookmarkCards savedList={savedList} deleteArticle={deleteArticle} />
              </div>
            </div>
          </div>
      </>
      );
  }

    return <div>No Data Available</div>;
    
};

export default NewsCards;
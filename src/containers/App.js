import React, { useState, useEffect } from 'react';
import NewsArticle from '../components/NewsArticle'; 
import '../App.css';

  function App() {
    const [articleList, setArticleList] = useState([]);
    

  function getArticleListAPI() {
    return fetch('http://localhost:3001/articles')
      .then(res => res.json())
      .then(data => data);
  };

  useEffect(() => {
    getArticleListAPI()
      .then(articleList => setArticleList(articleList));
  }, [])

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
    <div>
      {articleList.map((article =>
        <NewsArticle 
          key={article.url} 
          title={article.title} 
          img={article.urlToImage}
          url={article.url}
          date={article.url}
          saveArticle={saveArticle}/>
        ))
      }
    </div> 
  )
}
export default App;
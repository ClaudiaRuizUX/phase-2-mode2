import React, { useState, useEffect } from 'react';
import NewsShowcase from '../components/NewsShowcase'; 
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
      <NewsShowcase articleList={articleList} saveArticle={saveArticle} />
    </div> 
  )
}
export default App;
import React, { useState, useEffect } from 'react';
import '../App.css';

  function App() {
    const [articleList, setArticleList] = useState([]);
    //const [article, setArticle] = useState([]);
    

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
        <ArticleComponent key={article.url} title={article.title} id={article.url} saveArticle={saveArticle}/>
        ))
      }
    </div> 
  )
}

function ArticleComponent (props){
  const {id, title, saveArticle} = props;



  console.log(props);
    return(
      <p onClick={()=> saveArticle({
        title: title
      })}>{title}</p>
    )
};

export default App;
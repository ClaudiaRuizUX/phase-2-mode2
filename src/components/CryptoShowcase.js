import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';


const CryptoShowcase = (props) => {
    const {saveArticle } = props;
    const [articleList, setArticleList] = useState([]);

  function getArticleListAPI() {
    return fetch('https://newsapi.org/v2/everything?q=crypto&from=2022-05-25&sortBy=publishedAt&apiKey=9a7f75898c5d4d319f49cf230b57ac39')
      .then(res => res.json())
      .then(data => data.articles);
  };

  useEffect(() => {
    getArticleListAPI()
      .then(articleList => setArticleList(articleList));
  }, [])

    return (
        <div>
            {articleList.map((article =>
                <NewsArticle 
                key={article.url} 

                title={article.title} 
                img={article.urlToImage}
                url={article.url}
                date={article.publishedAt}
                
                saveArticle={saveArticle}/>
                ))
            }
        </div>
    );
};

export default CryptoShowcase;
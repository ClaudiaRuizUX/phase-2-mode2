import React from 'react';
import NewsArticle from './NewsArticle';

const NewsShowcase = (props) => {
    const { articleList, saveArticle } = props;

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

export default NewsShowcase;
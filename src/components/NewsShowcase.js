import React from 'react';
import NewsArticle from './NewsArticle';

const NewsShowcase = (props) => {
    const { articleList, onBookmark } = props;



    //const {articleList, onBookmark} = props;

    return (
        <div>
            {articleList.map(article => 
                <NewsArticle 
                    key={article.url}
                    article={article}
                    onBookmark={onBookmark} 
                />      
            )}
        </div>
    );
};

export default NewsShowcase;
import React from 'react';
import SavedArticle from './SavedArticle'; 

const BookmarkNews = (props) => {
    const { savedList, deleteArticle } = props;

    return (
        <div>
            {savedList.map((savedArticle =>
                <SavedArticle key={savedArticle.id} title={savedArticle.title} 
                url={savedArticle.url} date={savedArticle.date} id={savedArticle.id}
                deleteArticle={deleteArticle} />
                ))
            }
        </div>
    );
};

export default BookmarkNews;
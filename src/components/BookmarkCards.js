import React from 'react';
import SavedArticle from './newsCard/SavedArticle'; 

const BookmarkCards = (props) => {
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

export default BookmarkCards;
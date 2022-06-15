



export function getArticleListAPI(subject) {
  return fetch(`https://newsapi.org/v2/${subject}&apiKey=ccf2290e603243e3abf153def8f8ce3f`)
  // return fetch(`http://localhost:3001/articles`)
    .then(res => res.json())
    .then(data => data.articles);
};


// export function getArticleListAPI(subject) {
//     return fetch(`https://newsapi.org/v2/everything?q=${subject}&from=${daysAgo18}&sortBy=publishedAt&apiKey=ccf2290e603243e3abf153def8f8ce3f`)
//       .then(res => res.json())
//       .then(data => data.articles);
// };

export function getSavedListAPI() {
    return fetch('http://localhost:3002/savedArticles')
      .then(res => res.json())
      .then(data => data);
};

export function deleteSavedArticleAPI(id) {
    return fetch(`http://localhost:3002/savedArticles/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => data);
}

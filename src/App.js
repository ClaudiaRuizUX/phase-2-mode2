import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [articleList, setArticleList] = useState([]);
  //const [article, setArticle] = useState([]);
  const [article, setArticle] = useState({
    title: ""
  });
  // const [bookmarkedArticle, setBookmarkedArticle] = useState([]);
  // const [bookmarkedList, setBookmarkedList] = useState([]);

  function getArticleListAPI() {
    return fetch('http://localhost:3000/articles')
      .then(res => res.json())
      .then(data => data);
  }
  function addArticleToAPI(article) {
    return fetch('http://localhost:3002/savedArticles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json'
      },
      body: JSON.stringify(article)
    }).then(res => res.json())
      .then(data => data);
  }

  useEffect(() => {
    getArticleListAPI()
      //.then(data => console.log(data))
      .then(articleList => setArticleList(articleList));
      // .then(data => this.setState({
      //   sidenews: data
      // }))
  }, [])

  const addArticle = (props) => {
    return addArticleToAPI(props)
    .then(data => {
      setArticleList([...articleList, data])
    })
    

  }
  
//this.setState({ pokemonCollection: [...this.state.pokemonCollection, pokemon] })


  return (
    // <form onSubmit={onSubmit}>
    //   <label>Article Title:
		// 		<input name="title" type="text" value={article.title}></input></label>
    //   <input type="submit" value="Add Book"></input>
    // </form>
    <div>
      {articleList.map((article => <p onClick={props.addArticle}>{article.title}</p>))}
    </div>
  );
}

export default App;
// onClick={() => addArticle(savedArticle) http://localhost:3002/savedArticles}
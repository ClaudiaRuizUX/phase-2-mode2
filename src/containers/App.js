import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import CryptoNews from './CryptoNews';
import '../App.css';

const myAlanKey = '58d519471ab2ac20f47a6c244b6db8a72e956eca572e1d8b807a3e2338fdd0dc/stage';


function App() {
  const [savedArticles, setSavedArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: myAlanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines') {
          console.log(articles);
          // setSavedArticles(savedArticles)
        }
      }
    })
  }, [])


  return (
    <>  
      <div>
        <CryptoNews /> 
      </div>
    </>
  )
 }
 export default App;
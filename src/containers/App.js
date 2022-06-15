import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import TopNews from './TopNews';
import '../App.css';

const myAlanKey = '58d519471ab2ac20f47a6c244b6db8a72e956eca572e1d8b807a3e2338fdd0dc/stage';


function App() {
  useEffect(() => {
    alanBtn({
      key: myAlanKey,
    })
  }, [])


  return (
    <>  
      <div>
        <TopNews /> 
      </div>
    </>
  )
 }
 export default App;
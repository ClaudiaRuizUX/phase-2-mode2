import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import CryptoShowcase from '../components/CryptoShowcase';
import '../App.css';
// import RegulationShowcase from '../components/RegulationShowcase';
// import FinanceShowcase from '../components/FinanceShowcase';
// import { getSavedListAPI, deleteSavedArticleAPI, getArticleListAP } from '../apis/newsAPI';


function App() {
  return (
    <>  
      <div>
        <CryptoShowcase /> 
      </div>
    </>
  )
 }
 export default App;
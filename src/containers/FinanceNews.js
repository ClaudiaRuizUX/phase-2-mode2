import React from 'react';
import NavBar from '../components/NavBar';
import NewsCards from '../components/NewsCards';

const FinanceNews = () => {
  
return (
  <>
  <h1>Crypto Tracker</h1>  
    <NavBar /> 
    <NewsCards subject="finance" />
  </>
    );
};

export default FinanceNews;
import React from 'react';
import NavBar from '../components/NavBar';
import NewsCards from '../components/NewsCards';

const CryptoNews = () => {
  
return (
  <>
  <h1>Crypto Tracker</h1>  
    <NavBar /> 
    <NewsCards subject="crypto" />
  </>
    );
};

export default CryptoNews;
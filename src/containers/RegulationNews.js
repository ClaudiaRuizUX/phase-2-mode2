import React from 'react';
import NavBar from '../components/NavBar';
import NewsCards from '../components/NewsCards';

const RegulationNews = () => {
  return (
    <>
    <h1>Crypto Tracker</h1>  
      <NavBar /> 
      <NewsCards subject="crypto-regulation" />
    </>
      );
};

export default RegulationNews;
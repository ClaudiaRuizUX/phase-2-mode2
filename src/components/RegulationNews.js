import React from 'react';
import NavBar from './NavBar';
import Showcase from './Showcase';

const RegulationNews = () => {
  return (
    <>
    <h1>Crypto Tracker</h1>  
      <NavBar /> 
      <Showcase subject="crypto-regulation" />
    </>
      );
};

export default RegulationNews;
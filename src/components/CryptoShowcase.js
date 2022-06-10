import React from 'react';
import NavBar from './NavBar';
import Showcase from './Showcase';

const CryptoShowcase = () => {
  
return (
  <>
  <h1>Crypto Tracker</h1>  
    <NavBar /> 
    <Showcase subject="crypto" />
  </>
    );
};

export default CryptoShowcase;
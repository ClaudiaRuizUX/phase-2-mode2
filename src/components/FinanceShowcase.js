import React from 'react';
import NavBar from './NavBar';
import Showcase from './Showcase';

const FinanceShowcase = () => {
  
return (
  <>
  <h1>Crypto Tracker</h1>  
    <NavBar /> 
    <Showcase subject="finance" />
  </>
    );
};

export default FinanceShowcase;
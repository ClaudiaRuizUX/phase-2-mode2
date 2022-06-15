import React from 'react';
import NavBar from '../components/NavBar';
import NewsCards from '../components/NewsCards';

const FinanceNews = () => {
  const fianceSubject = "top-headlines?q=finance";
return (
  <>
  <h5>A News Anchor that reads for you</h5>
  <h1>Alpaca News Reader</h1>  
    <NavBar /> 
    <NewsCards subject={fianceSubject} />
  </>
    );
};

export default FinanceNews;
import React from 'react';
import NavBar from '../components/NavBar';
import NewsCards from '../components/NewsCards';

const TopNews = () => {
  const topNewsSubject = "top-headlines?country=au&category=business";
  
  return (
    <>
    <h5>A News Anchor that reads for you</h5>
    <h1>Alpaca News Reader</h1>   
      <NavBar /> 
      <NewsCards subject={topNewsSubject} />
    </>
      );
};

export default TopNews;
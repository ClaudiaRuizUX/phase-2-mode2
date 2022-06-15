import React from 'react';
import NavBar from '../components/NavBar';
import NewsCards from '../components/NewsCards';

function getDaysAgo(b){
  let myDate = new Date();
  myDate.setDate(myDate.getDate()-b);
  return myDate
};


const RealEstateNews = () => {
  let daysAgo18 = getDaysAgo(18).toISOString().slice(0, 10);
  const realestateSubject = `everything?q=realestate&from=${daysAgo18}&sortBy=publishedAt?country=au`;

return (
  <>
    <div class="alpaca">
      <div class="container">
        <h5>A News Anchor that reads for you</h5>
        <h1>Alpaca News Reader</h1>
      </div>
    </div> 
    
    <NavBar /> 
    <NewsCards subject={realestateSubject} />
  </>
    );
};

export default RealEstateNews;
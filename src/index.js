import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import FinanceNews from './containers/FinanceNews';
import RealEstateNews from './containers/RealEstateNews';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/finance" element={<FinanceNews />} />
      <Route path="/realestate" element={<RealEstateNews />} />
    </Routes>
  </BrowserRouter>
);


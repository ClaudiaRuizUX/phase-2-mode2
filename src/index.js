import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import FinanceShowcase from './components/FinanceShowcase';
import RegulationShowcase from './components/RegulationShowcase';

import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/finance" element={<FinanceShowcase />} />
      <Route path="/regulation" element={<RegulationShowcase />} />
    </Routes>
  </BrowserRouter>
);


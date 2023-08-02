import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PortfolioApp from './portfolio/PortfolioApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  </>
);


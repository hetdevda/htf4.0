import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import { RealEstateProvider } from './context/realEstateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RealEstateProvider>
      <Router>
        <App />
      </Router>
    </RealEstateProvider>
  </React.StrictMode>
);

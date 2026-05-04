import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CommodityFuturesLearningApp from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommodityFuturesLearningApp />
  </React.StrictMode>
);

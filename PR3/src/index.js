import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

setInterval(tick, 1000);
function tick() {
  const ele = (
    <div>
      <h1>Welcome to charusat</h1>
      <h2>Date : {new Date().toLocaleDateString()}</h2>
      <h2>Time : {new Date().toLocaleTimeString()}</h2>
    </div>);
  root.render(ele);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
reportWebVitals();

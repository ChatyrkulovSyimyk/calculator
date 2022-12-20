import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopHead from './TopHead';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App color='blue'/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

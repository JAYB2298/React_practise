import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component_mou/App'
//import App from './ConditionalRendering/App'
//import App from './table_building/App';
//import App from './ContextApi/App'
//import App from '../src/ComDrilling/App';
//import App from '../src/bootstrap/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

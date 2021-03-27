import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './React_redux/App'
//import App from './table_building/App';
//import App from './ContextApi/App'
import App from './routing/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

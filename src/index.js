import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './index.css';
import App from './App.js';


ReactDOM.render(
  
  <React.StrictMode>
    <h1 className={styles.mystyle}>Hi!</h1>
    <h1 style="padding:10px;margin:10px;">This is Harsh Raj.</h1>
    <p>A Front-End Developer</p>
    <p>A Final Year Student @ Asansol Engineering College</p>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


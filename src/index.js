import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './index.css';


ReactDOM.render(
  
  <React.StrictMode>
    <h1 className={styles.mystyle}>Hi!</h1>
    <h1>This is Harsh Raj.</h1>
    <p>A Front-End Developer</p>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


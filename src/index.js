import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <h1> Harsh Netflix Pack </h1>
    <p> List of 5 best Series</p>
    <ol>
      <li>Stranger Things</li>
      <li>Witcher</li>
      <li>Sherlock Homes</li>
      <li>Sacred Games</li>
      <li>Dark</li>
    </ol>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

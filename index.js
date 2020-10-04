/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/
import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

const Book = ({title, author, numberOfPages}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {numberOfPages}</p>
    </section>
  )
}
const Library = () => {
  return(
  <div>
    <Book title = "The sun rises" author="Earnest Hemmingway" numberOfPages={250}></Book>
    <Book title = "White Teeth" author="Zadie Smith" numberOfPages={480}></Book>
    <Book title = "Cat's Cradle" author="Kurt Vonnegut" numberOfPages={304}></Book>
  </div>
  )
}

render(
  <Library/>,
  document.getElementById('root')
)

serviceWorker.unregister()
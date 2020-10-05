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

let bookList = [
  {"title": "The sun rises", "author": "Earnest Hemmingway", "numberOfPages": 250},
  {"title": "White Teeth", "author": "Zadie Smith", "numberOfPages": 480},
  {"title": "Cat's Cradle", "author": "KurtVonnegut", "numberOfPages": 305}
]

const Book = ({title, author, numberOfPages}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {numberOfPages}</p>
    </section>
  )
}

class Library extends React.Component {
  state = { open: false}
  toggleOpenClosed = () => {
    this.setState( prevState =>({
      open: !prevState.open
    }))
  }
  render(){
    const { books } = this.props
    return(
      <div>
        <h1>The Library is {this.state.open ? 'open' : 'close'} </h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => 
                <Book
                    key={i} 
                    title={book.title}
                    author={book.author}
                    numberOfPages={book.numberOfPages}/>
  
        )}
      </div>
    )
  }
}

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)

serviceWorker.unregister()

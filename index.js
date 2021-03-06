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
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

class Message extends React.Component{
  render(){
    return(
      <div>
        <h1 style={{color: this.props.color}}>{this.props.msg}</h1>
        <p>I'll check back in {this.props.minutes} minutes</p>
      </div>
    )
  }
}

ReactDOM.render(<Message color="blue" msg="How are you?" minutes={51} />, document.getElementById('root'))

serviceWorker.unregister()

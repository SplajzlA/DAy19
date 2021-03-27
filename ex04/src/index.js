import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div calssName="App">
        <h1>Hello, Padawans!</h1>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
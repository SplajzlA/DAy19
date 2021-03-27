import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
      // Change code only below this line  
      const world = "World";

      // Change code only above this line 
      return (
      <div calssName="App">
        <h1>Hello, { world }!</h1>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
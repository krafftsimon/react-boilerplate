import React, { Component } from 'react';

import './app.scss';
import * as eaimg from './assets/EA.png';

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
  }

  incrCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  
  render() {
    return (
      <div className="test">
        <h1> Reddit Clone </h1>
        <img src={eaimg} />
        <h1> Reddit Clone </h1>
        <div> {this.state.counter} </div>
        <button onClick={() => this.incrCounter()}>incr</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        
      </div>
    );
  }
}

export default App;
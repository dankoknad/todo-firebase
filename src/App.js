import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import base from './base';

class App extends Component {
  constructor(){
    super();
    this.state = {
      speed: 0,
      tempSpeed: 0,
      items: [],
      tmpItem: ''
    };
  }

  componentWillMount(){
    this.ref = base.syncState('/react-01/items', {
      context: this,  
      state: 'items'
    });
   }

  updateTempItem = (e) => {
    e.preventDefault();
    
    this.setState({
      tmpItem: e.target.value
    });
  }

  updateList = (e) => {
    e.preventDefault();

    this.setState({
      items: [...this.state.items, this.state.tmpItem],
      tmpItem: ''
    })
  }

  render() {
    const list = (this.state.items.length) 
      ? this.state.items.map((item,i) => <li key={i}> {item} </li>) 
      : <li>Loading ...</li>;
  
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello
        </p>
        <br/>
        <ul>
          { list }
        </ul>
        <form onSubmit={this.updateList}>
          <input onChange={this.updateTempItem} value={this.state.tmpItem} />
        </form>
      </div>
    );
  }
}

export default App;

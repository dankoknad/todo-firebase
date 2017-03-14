import React, { Component } from 'react';
import logo from './logo.svg';
import logoFirebase from './firebase.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css';
import './App.css';
import uuidV4 from 'uuid/v4';
import _ from 'lodash';


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
    const newItem = {
      id: uuidV4(),
      txt: this.state.tmpItem,
      isDone: false
    }

    this.setState({
      items: [newItem, ...this.state.items],
      tmpItem: ''
    })
  }

  deleteItem = (e) => {
    e.preventDefault();
    const removeIndex = this.state.items.findIndex(item => item.id === e.target.getAttribute('data-index'));
    
    this.setState({
      items: [
        ...this.state.items.slice(0, removeIndex),
        ...this.state.items.slice(removeIndex+1)
      ]
    })
        
    console.log("removeIndex", removeIndex);
  }

  toggleTodo = (id) => {
    const whichTodo = _.find(this.state.items, { 'id': id });
    const index = _.findIndex(this.state.items, { 'id': id });
    const edited = {...whichTodo, isDone : !whichTodo.isDone};
    
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        edited,
        ...this.state.items.slice(index+1)
      ]
    })


  }

  render() {
    const list = (this.state.items.length) 
      ? this.state.items.map((item) => 
        <li key={item.id}>
          <span className="abc-checkbox">
              <input id={item.id} className="" type="checkbox" onChange={() => this.toggleTodo(item.id)} checked={item.isDone}/> 
              <label htmlFor={item.id} ></label>
          </span>
          <span className={item.isDone ? "done" : null}>{item.txt}</span> 
          <button className="btn btn-danger delete " onClick={this.deleteItem} data-index={item.id}> x </button> 
        </li>
      ) 
      : <li>Loading ...</li>;
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo React" />
          <img src={logoFirebase} className="logo-firebase" alt="logo Firebase" />
          <h2>Welcome to React &amp; Firebase</h2>
        </div>
        <p className="App-intro">
          Todos:
        </p>
        <br/>
        <form className="form-inline" onSubmit={this.updateList}>
          <input className="form-control" 
            onChange={this.updateTempItem} 
            value={this.state.tmpItem}
            placeholder="todo.."
          />
        </form>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}

export default App;

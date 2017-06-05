import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
     this.state = {
      PlayerOne: "X",
      PlayerTwo: "O",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ], winner: null,
     }
    }
  

handleClick(index) {
  this.state.board[index] = this.state.currentTurn
  this.setState({
    board: this.state.board,
    currentTurn: this.state.currentTurn === this.state.PlayerOne ? this.state.PlayerTwo : this.state.PlayerOne,
  })
  console.log(index);
}

  render() {
    return (
      <div className="board">
      {this.state.board.map((cell, index) => {return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;})}
        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

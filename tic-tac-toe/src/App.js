import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  // React components can have state by setting this.state in the constructor, 
  // which should be considered private to the component. Let's store the current value 
  // of the square in state, and change it when the square is clicked.
  // In JavaScript classes, you need to explicitly call super(); 
  // when defining the constructor of a subclass.


  constructor() {
    super();
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <button className="square" onClick={() => {
        if(this.state.value === 'X') {
          this.setState({value: 'Y'})
        } else {
          this.setState({value: 'X'})
        } 
        console.log(this.state.value)
        }}>
        {this.props.value}
      </button>
    )
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />
  }

  render () {
    const status = 'Next player: X';
    return (
      <div className="App">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Main App
class Game extends Component {
  render () {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default Game;

import React, { Component } from 'react';
import Square from './Square';
import './Game.css';

class Board extends Component {
  renderSquare = i => {
    const result = checkValueExistInResultArray(this.props.result, i);
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        win={result}
        key={i}
      />
    );
  };

  renderSquares = n => {
    const squares = [];
    for (let i = n; i < n + 20; i += 1) {
      squares.push(this.renderSquare(i));
    }
    return squares;
  };

  renderRows = i => {
    return (
      <div className="board-row" key={i}>
        {this.renderSquares(i)}
      </div>
    );
  };

  renderBoad = n => {
    const rows = [];
    for (let i = 0; i <= n; i += 20) {
      rows.push(this.renderRows(i));
    }
    return rows;
  };

  render() {
    return <div>{this.renderBoad(400)}</div>;
  }
}

const checkValueExistInResultArray = (array, value) => {
  if (array === null) return false;
  for (let i = 0; i < array.length; i += 1) if (array[i] === value) return true;
  return false;
};

export default Board;

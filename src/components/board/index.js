import React, { Component } from 'react';
import Square from '../square/index';
import '../game/style.css';

class Board extends Component {
  renderSquare = (i) => {
    const { result, onClick, squares } = this.props;

    const results = checkValueExistInResultArray(result, i);
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
        win={results}
        key={i}
      />
    );
  };

  renderSquares = (n) => {
    const squares = [];
    for (let i = n; i < n + 20; i += 1) {
      squares.push(this.renderSquare(i));
    }
    return squares;
  };

  renderRows = (i) => (
    <div className="board-row" key={i}>
      {this.renderSquares(i)}
    </div>
  );

  renderBoad = (n) => {
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

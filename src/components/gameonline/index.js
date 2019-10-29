import React, { Component } from 'react';
import Chat from '../chat/index';
import Board from '../board/index';

class GameOnline extends Component {
  render() {
    const result = [];
    const squares = [];
    return (
      <div className="game">
        <div className="game-board">
          <Board
            onClick={(i) => this.props.botPlay(i)}
            squares={squares}
            result={result}
          />
        </div>
        <Chat />
      </div>
    );
  }
}

export default GameOnline;

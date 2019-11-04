import React, { Component } from 'react';
import Board from '../board/index';
import './style.css';

class Game extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.props.fetchUser();
  }

  // constructor(props) {
  //   super(props);
  //   this.props.fetchUser();
  // }

  render() {
    const { history } = this.props.game;
    const { stepNumber } = this.props.game;
    const { winner } = this.props.game;
    const { xIsNext } = this.props.game;
    const { result } = this.props.game;
    const { display } = this.props.game;
    const current = history[stepNumber];
    const { squares } = current;

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${step.x}:${step.y}`
        : 'Go to game start';
      const displays = display === move ? 'bold w-150' : 'w-150';
      const key = move + 1;
      return (
        <li key={key}>
          <button
            type="button"
            className={displays}
            onClick={() => this.props.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            onClick={(i) => this.props.botPlay(i)}
            squares={squares}
            result={result}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>
            <button
              type="button"
              className="w-150"
              onClick={() => this.props.handleClickPlayAgain()}
            >
              Play again!
            </button>
            {moves}
          </ol>
        </div>
      </div>
    );
  }
}

export default Game;

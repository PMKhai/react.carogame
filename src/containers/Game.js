import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import './Game.css';
import * as actions from '../actions';

class Game extends Component {
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
            onClick={(i) => this.props.handleClick(i)}
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

const mapStateToProps = (state) => ({
  game: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  handleClickPlayAgain: () => {
    dispatch(actions.clickPlayAgain());
  },
  handleClick: (i) => {
    dispatch(actions.clickSquare(i));
  },
  jumpTo: (move) => {
    dispatch(actions.jumpTo(move));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

import React, { Component } from "react";
import Board from "./Board";
import "./Game.css";

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;

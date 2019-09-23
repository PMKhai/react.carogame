// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import Square from './Square'
import './Game.css'

class Board extends Component {
  renderSquare = i => {
    const result = checkValueExistInResultArray(this.props.result, i)
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        win={result}
        key={i}
      />
    )
  }

  renderSquares = n => {
    let squares = []
    for (let i = n; i < n + 20; i++) {
      squares.push(this.renderSquare(i))
    }
    return squares
  }

  renderRows = i => {
    return (
      <div className="board-row" key={i}>
        {this.renderSquares(i)}
      </div>
    )
  }

  renderBoad = n => {
    let rows = []
    for (let i = 0; i <= n; i += 20) {
      rows.push(this.renderRows(i))
    }
    return rows
  }

  render() {
    return <div>{this.renderBoad(400)}</div>
  }
}

const checkValueExistInResultArray = (array, value) => {
  if (array === null) return false
  for (let i = 0; i < array.length; i++) if (array[i] === value) return true
  return false
}

export default Board

import React, { Component } from 'react';
import io from 'socket.io-client';
import Chat from '../../containers/chat';
import Board from '../board/index';
import { API_URL } from '../../constants';

const socket = io(API_URL);

class GameOnline extends Component {
  constructor(props) {
    super(props);

    this.props.getRoomId(socket.id);
    socket.on('findmatch', (data) => {
      localStorage.setItem('roomId', data.roomId);
    });
  }

  componentWillUnmount() {
    const room = localStorage.getItem('roomId');
    socket.emit('unsubscribe', room);
    localStorage.removeItem('roomId');
  }

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

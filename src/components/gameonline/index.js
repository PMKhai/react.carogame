import React, { Component } from 'react';
import io from 'socket.io-client';
import Chat from '../../containers/chat';
import Board from '../../containers/boardonline';
import LogoutButton from '../../containers/logoutbutton';
import { API_URL } from '../../constants';

const socket = io(API_URL);

class GameOnline extends Component {
  componentWillUnmount() {
    const room = localStorage.getItem('roomId');
    socket.emit('unsubscribe', room);
    localStorage.removeItem('roomId');
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <Chat />
        <LogoutButton />
      </div>
    );
  }
}

export default GameOnline;

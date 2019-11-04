import React, { Component } from 'react';
import io from 'socket.io-client';
import { API_URL } from '../../constants';
import Board from '../board/index';

const socket = io(API_URL);

class BoardOnline extends Component {
  constructor(props) {
    super(props);

    socket.on('RECIVE_TROOP', (data) => {
      console.log(data);
      this.props.clickSquare(data);
    });

    const room = localStorage.getItem('roomId');
    socket.emit('subscribe', room);

    this.sendTroop = (i) => {
      const { isPlay } = this.props.boardOnline;
      if (isPlay) {
        const room = localStorage.getItem('roomId');
        socket.emit('subscribe', room);

        socket.emit('SEND_TROOP', {
          room,
          index: i,
          author: this.props.boardOnline.username,
        });
      } else {
        console.log('xxxsx');
      }

      //  this.props.clickSquare(i);
    };
  }

  componentDidMount() {
    this.props.fetchUsername();
    const posision = localStorage.getItem('playFirst');
    console.log(typeof posision);
    if (posision === 'true') this.props.getTheStartingPosition(true);
    else this.props.getTheStartingPosition(false);
  }

  render() {
    const { squares, result } = this.props.boardOnline;

    return (
      <Board
        onClick={(i) => this.sendTroop(i)}
        squares={squares}
        result={result}
      />
    );
  }
}

export default BoardOnline;

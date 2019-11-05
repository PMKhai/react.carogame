import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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

    socket.on('RECIVE_WINNER', (data) => {
      console.log(data);
      this.props.loseGame(data);
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
      }
    };

    this.sendWinner = () => {
      const room = localStorage.getItem('roomId');
      socket.emit('subscribe', room);

      const troop = localStorage.getItem('myTroop');
      console.log(troop);
      socket.emit('SEND_WINNER', {
        room,
        troop,
        author: this.props.boardOnline.username,
      });
    };
  }

  componentDidMount() {
    this.props.fetchUsername();
    const posision = localStorage.getItem('playFirst');
    if (posision === 'true') this.props.getTheStartingPosition(true);
    else this.props.getTheStartingPosition(false);
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { squares, result, winner } = this.props.boardOnline;
    const myTroop = localStorage.getItem('myTroop');

    const displayLoser =
      winner === myTroop ? (
        winner !== null ? (
          <div>You won</div>
        ) : null
      ) : winner !== null ? (
        <div>You losed</div>
      ) : null;

    return (
      <div className="d-flex align-content-center">
        {displayLoser}
        <div>
          <div className="mb-1">
            <Button variant="dark" className="mr-2 w-10">
              Back home
            </Button>
            <Button
              variant="info"
              className="mr-2 w-25"
              onClick={() => this.sendWinner()}
            >
              I lose
            </Button>
            <Button variant="info" className="mr-2">
              This match is tie!
            </Button>
            <Button variant="info" className=" w-25">
              Undo
            </Button>
          </div>
          <Board
            onClick={(i) => this.sendTroop(i)}
            squares={squares}
            result={result}
          />
        </div>
      </div>
    );
  }
}

export default BoardOnline;

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Board from '../board/index';
import socket from '../../socket';

class BoardOnline extends Component {
  constructor(props) {
    super(props);

    socket.on('RECIVE_TROOP', (data) => {
      this.props.clickSquare(data);
    });

    socket.on('RECIVE_WINNER', (data) => {
      this.props.loseGame(data);
    });

    socket.on('RECIVE_TIE_REQUEST', (data) => {
      this.props.checkTieRequest(data);
      this.props.checkTie();
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
      socket.emit('SEND_WINNER', {
        room,
        troop,
        author: this.props.boardOnline.username,
      });
    };

    this.sendRequestTie = () => {
      const room = localStorage.getItem('roomId');
      socket.emit('subscribe', room);

      socket.emit('SEND_TIE_REQUEST', {
        room,
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

  handleClickBackHomeButton = () => {
    const room = localStorage.getItem('roomId');
    socket.emit('unsubscribe', room);
    this.props.clickBackHomeButton();
  };

  render() {
    // eslint-disable-next-line object-curly-newline
    const { squares, result, winner, requestTie } = this.props.boardOnline;
    const myTroop = localStorage.getItem('myTroop');

    const displayLoser =
      winner === myTroop ? (
        winner !== null ? (
          <div>You won</div>
        ) : null
      ) : winner !== null ? (
        <div>You losed</div>
      ) : null;

    const displayTieRequest =
      requestTie === true ? (
        <div>Asks for a tie?</div>
      ) : (
        <div> This match is tie!</div>
      );

    return (
      <div className="d-flex align-content-center">
        {displayLoser}
        <div>
          <div className="mb-1">
            <Button
              variant="dark"
              className="mr-2 w-10"
              onClick={this.handleClickBackHomeButton}
            >
              Back home
            </Button>
            <Button
              variant="info"
              className="mr-2 w-25"
              onClick={this.sendWinner}
            >
              I lose
            </Button>
            <Button
              variant="info"
              className="mr-2"
              onClick={this.sendRequestTie}
            >
              {displayTieRequest}
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

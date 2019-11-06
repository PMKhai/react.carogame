import React, { Component } from 'react';
import Chat from '../../containers/chat';
import Board from '../../containers/boardonline';
import LogoutButton from '../../containers/logoutbutton';

class GameOnline extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.props.hideLoading();
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-end">
          <LogoutButton />
        </div>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <Chat />
        </div>
      </div>
    );
  }
}

export default GameOnline;

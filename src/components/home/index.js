import React, { Component } from 'react';
import io from 'socket.io-client';
import PlayButton from '../playbutton/index';
import Profile from '../profile/index';
import LogoutButton from '../../containers/logoutbutton';
import { API_URL } from '../../constants';

const socket = io(API_URL);

class Home extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.props.fecthUser();
  }

  // constructor(props) {
  //   super(props);
  //   this.props.fecthUser();
  // }

  findMatch = (socketId) => {
    this.props.findMatch(socketId);
    socket.on('findmatch', (data) => {
      console.log(data);
      localStorage.setItem('roomId', data.roomId);
      localStorage.setItem('myTroop', data.myTroop);
      localStorage.setItem('yourTroop', data.yourTroop);
      localStorage.setItem('playFirst', data.playFirst);
      this.props.handleClickPlayButtonPvP();
    });
  };

  render() {
    // eslint-disable-next-line object-curly-newline
    const { email, gender, picture, name, isLoading } = this.props.home;
    let displayGender = null;
    console.log(gender);
    if (gender !== null && gender !== undefined) {
      if (gender === true) displayGender = 'Male';
      else if (gender === false) displayGender = 'Female';
    }
    return (
      <div>
        <div className="d-flex justify-content-end">
          <LogoutButton />
        </div>
        <div className="game">
          <div>
            <div className="mb-1">
              <Profile
                email={email}
                gender={displayGender}
                picture={picture}
                name={name}
              />
            </div>
            <div>
              <PlayButton
                onClickPlayButtonPvE={this.props.handleClickPlayButtonPvE}
                onClickPlayButtonPvP={() => this.findMatch(socket.id)}
                showLoading={this.props.showLoading}
                hideLoading={this.props.hideLoading}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

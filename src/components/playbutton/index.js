import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class PlayButton extends Component {
  render() {
    return (
      <div className="d-inline clearfix">
        <Button
          className="btn btn-secondary d-inline w-50 clearfix"
          onClick={this.props.onClickPlayButtonPvE}
        >
          Chơi với máy
        </Button>
        <Button
          className="btn btn-secondary d-inline w-50 clearfix"
          onClick={this.props.onClickPlayButtonPvP}
        >
          Chơi với đối thủ
        </Button>
      </div>
    );
  }
}

export default PlayButton;

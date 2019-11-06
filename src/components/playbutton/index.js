import React, { Component } from 'react';
import { Button, Spinner } from 'react-bootstrap';

class PlayButton extends Component {
  handleClickPlayButtonPvP = () => {
    this.props.onClickPlayButtonPvP();
    this.props.showLoading();
  };

  render() {
    const { isLoading } = this.props;
    const loading =
      isLoading === true ? (
        <Spinner animation="grow" variant="dark" size="sm" />
      ) : null;
    return (
      <div className="d-inline clearfix">
        <Button
          className="btn btn-secondary d-inline w-50 clearfix"
          onClick={this.props.onClickPlayButtonPvE}
        >
          PvAI
        </Button>
        <Button
          className="btn btn-secondary d-inline w-50 clearfix"
          onClick={this.handleClickPlayButtonPvP}
        >
          {loading}
          {loading}
          PvP
          {loading}
          {loading}
        </Button>
      </div>
    );
  }
}

export default PlayButton;

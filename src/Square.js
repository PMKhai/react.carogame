import React from 'react';
import './Game.css';

function Square(props) {
  const win = props.win ? 'win square' : 'square';
  return (
    <button className={win} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;

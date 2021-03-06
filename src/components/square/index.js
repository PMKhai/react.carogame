import React from 'react';
import '../game/style.css';

function Square(props) {
  const { win, onClick, value } = props;
  const wins = win ? 'win square' : 'square';
  return (
    <button type="button" className={wins} onClick={onClick}>
      {value}
    </button>
  );
}
export default Square;

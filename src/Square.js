// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Game.css";

function Square(props) {
  return (
    <button className="square win" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;

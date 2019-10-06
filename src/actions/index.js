import * as types from '../constants';

export const clickPlayAgain = () => ({
  type: types.CLICK_PLAY_AGAIN,
});

export const clickSquare = (i) => ({
  type: types.CLICK_SQUARE,
  index: i,
});

export const jumpTo = (step) => ({
  type: types.JUMP_TO,
  step,
});

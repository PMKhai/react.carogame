import axios from 'axios';
import { push } from 'connected-react-router';
import * as types from './constant';
import { API_URL, ME } from '../../constants/index';

const apiUrl = `${API_URL}${ME}`;

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

export const fetchUser = (userInfo) => ({
  type: types.FETCH_USER,
  userInfo,
});

export const fetchUserFromServer = () => async (dispatch) => {
  try {
    const token = `Bearer ${localStorage.getItem('token')}`;
    const res = await axios.get(apiUrl, {
      headers: { Authorization: token },
    });
    if (res.data !== null) dispatch(fetchUser(res.data.data));
  } catch (err) {
    dispatch(push('login'));
  }
};

export const botPlay = (i) => (dispatch, getState) => {
  dispatch(clickSquare(i));

  const { game } = getState();
  const { history, stepNumber } = game;
  const board = history[stepNumber];
  const indexForBot = findTheEmptySquare(board.squares, i);

  dispatch(clickSquare(indexForBot));
};

export const handleClichBackHomeButton = () => (dispatch) => {
  dispatch(clickPlayAgain());
  dispatch(push('/'));
};

const findTheEmptySquare = (board, i) => {
  let x = i;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (board[x + 1] === null && x + 1 >= 0 && x + 1 <= 399) return x + 1;
    if (board[x - 1] === null && x - 1 >= 0 && x - 1 <= 399) return x - 1;
    if (board[x + 20] === null && x + 20 >= 0 && x + 20 <= 399) return x + 20;
    if (board[x - 20] === null && x - 20 >= 0 && x - 20 <= 399) return x - 20;
    if (board[x + 20 + 1] === null && x + 20 + 1 >= 0 && x + 20 + 1 <= 399) {
      return x + 20 + 1;
    }
    if (board[x - 20 + 1] === null && x - 20 + 1 >= 0 && x - 20 + 1 <= 399) {
      return x - 20 + 1;
    }
    if (board[x + 20 - 1] === null && x + 20 - 1 >= 0 && x + 20 - 1 <= 399) {
      return x + 20 - 1;
    }
    if (board[x - 20 - 1] === null && x - 20 - 1 >= 0 && x - 20 - 1 <= 399) {
      return x - 20 - 1;
    }
    x += 1;
  }
};

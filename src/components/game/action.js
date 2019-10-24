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
    else dispatch(push('login'));
  } catch (err) {
    dispatch(push('login'));
  }
};

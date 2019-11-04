import axios from 'axios';
import { push } from 'connected-react-router';
import { API_URL, ME } from '../../constants/index';
import * as types from './constant';

const apiUrl = `${API_URL}${ME}`;

export const clickSquare = (data) => ({
  type: types.CLICK_SQUARE_ONLINE,
  data,
});

export const getUsername = (username) => ({
  type: types.GET_USERNAME_BOARDONLINE,
  username,
});

export const fetchUserFromServer = () => async (dispatch) => {
  try {
    const token = `Bearer ${localStorage.getItem('token')}`;
    const res = await axios.get(apiUrl, {
      headers: { Authorization: token },
    });
    const { email, name } = res.data.data;

    if (email) dispatch(getUsername(email));
    else dispatch(getUsername(name));
  } catch (err) {
    dispatch(push('login'));
  }
};

export const getTheStartingPosition = (position) => ({
  type: types.GET_THE_STARTING_POSITION,
  position,
});

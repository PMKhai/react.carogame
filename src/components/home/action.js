import axios from 'axios';
import { push } from 'connected-react-router';
import { API_URL, ME } from '../../constants/index';
import * as types from './constant';

const apiUrl = `${API_URL}${ME}`;

export const fetchUser = (userInfo) => ({
  type: types.FETCH_USER_INFO,
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

export const clickPlayButtonPvE = () => (dispatch) => {
  dispatch(push('/game'));
};

export const clickPlayButtonPvP = () => (dispatch) => {
  dispatch(push('/gameonline'));
};

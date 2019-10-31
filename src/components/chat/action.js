import axios from 'axios';
import { push } from 'connected-react-router';
import { API_URL, ME } from '../../constants/index';
import * as types from './constant';

const apiUrl = `${API_URL}${ME}`;

export const handleTypeMessage = (message) => ({
  type: types.TYPE_MESSAGE,
  message,
});

export const addMessage = (message) => ({
  type: types.ADD_MESSAGE,
  message,
});

export const getUsername = (username) => ({
  type: types.GET_USERNAME,
  username,
});

export const sendMessage = () => ({ type: types.SEND_MESSAGE });

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

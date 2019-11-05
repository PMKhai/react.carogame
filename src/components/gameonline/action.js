import axios from 'axios';
import * as loading from '../globalloading/action';
import { API_URL, FIND_MATCH } from '../../constants';

const url = `${API_URL}${FIND_MATCH}`;

export const getRoomId = (socketId) => async (dispatch) => {
  try {
    const token = `Bearer ${localStorage.getItem('token')}`;
    const fullUrl = `${url}/?socketId=${socketId}`;
    await axios.get(fullUrl, {
      headers: { Authorization: token },
    });
    dispatch(loading.hideLoading());
  } catch (error) {
    console.log(error);
  }
};

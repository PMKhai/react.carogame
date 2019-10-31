import axios from 'axios';
import { API_URL, FIND_MATCH } from '../../constants';

const url = `${API_URL}${FIND_MATCH}`;

export const getRoomId = (socketId) => async () => {
  try {
    const token = `Bearer ${localStorage.getItem('token')}`;
    const fullUrl = `${url}/?socketId=${socketId}`;
    await axios.get(fullUrl, {
      headers: { Authorization: token },
    });
  } catch (error) {
    console.log(error);
  }
};

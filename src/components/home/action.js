import axios from 'axios';
import { push } from 'connected-react-router';
import { API_URL, ME, FIND_MATCH } from '../../constants/index';
// import * as loading from '../globalloading/action';
import * as types from './constant';

const apiUrl = `${API_URL}${ME}`;
const apiUrlFindmatch = `${API_URL}${FIND_MATCH}`;

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
    console.log(res.data.data);
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
  // dispatch(loading.hideLoading());
};

export const getRoomId = (socketId) => async () => {
  try {
    const token = `Bearer ${localStorage.getItem('token')}`;
    const fullUrl = `${apiUrlFindmatch}/?socketId=${socketId}`;
    await axios.get(fullUrl, {
      headers: { Authorization: token },
    });
    //  dispatch(loading.showLoading());
  } catch (error) {
    console.log(error);
  }
};

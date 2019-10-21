import axios from 'axios';
import * as types from './constant';
import { API_URL } from '../../constants';
import * as loading from '../globalloading/action';

const apiUrl = `${API_URL}user/login`;

export const onChangeEmail = (email) => ({
  type: types.HANDLE_ONCHANGE_EMAIL_FIELD_IN_LOGIN,
  email,
});

export const onChangePassworrd = (password) => ({
  type: types.HANDLE_ONCHANGE_PASSWORD_FIELD_IN_LOGIN,
  password,
});

export const fetchData = (user) => ({
  type: types.FETCH_DATA_LOGIN,
  user,
});

export const fetchDataLogin = () => async (dispatch, getState) => {
  const { loginForm } = getState();
  dispatch(loading.showLoading());
  const res = await axios.post(apiUrl, loginForm, { timeout: 2000 });
  console.log(res);
  if (res.status === 200) {
    const { token } = res.data.data;
    localStorage.setItem('token', token);
  }
  dispatch(loading.hideLoading());
};

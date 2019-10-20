import axios from 'axios';
import * as types from './constant';
import { API_URL } from '../../constants';

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
  const res = await axios.post(apiUrl, loginForm);
  const { token } = res.data.data;

  await localStorage.setItem('token', token);
  await dispatch(fetchData(res.data));
};

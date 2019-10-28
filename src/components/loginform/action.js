import axios from 'axios';
import { push } from 'connected-react-router';
import * as types from './constant';
import { API_URL, LOGIN, LOGIN_GOOGLE } from '../../constants';
import * as loading from '../globalloading/action';

const apiUrlLogin = `${API_URL}${LOGIN}`;
const apiUrlLoginGoogle = `${API_URL}${LOGIN_GOOGLE}`;

export const onChangeEmail = (email) => ({
  type: types.HANDLE_ONCHANGE_EMAIL_FIELD_IN_LOGIN,
  email,
});

export const onChangePassworrd = (password) => ({
  type: types.HANDLE_ONCHANGE_PASSWORD_FIELD_IN_LOGIN,
  password,
});

export const fetchDataLogin = () => async (dispatch, getState) => {
  try {
    const { loginForm } = getState();

    dispatch(loading.showLoading());

    const res = await axios.post(apiUrlLogin, loginForm);
    console.log(res);

    const { token } = res.data.data;
    localStorage.setItem('token', token);

    dispatch(loading.hideLoading());
    dispatch(push('/'));
  } catch (err) {
    console.log(err);
    dispatch(loading.hideLoading());
  }
};

export const fetchDataLoginFromGoogle = () => async () => {
  try {
    axios.create({ withCredentials: true });
    const res = await axios.get(apiUrlLoginGoogle);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

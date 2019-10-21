import axios from 'axios';
import { push } from 'connected-react-router';
import * as types from './constant';
import { API_URL, REGISTER } from '../../constants';
import * as loading from '../globalloading/action';

const apiUrl = `${API_URL}${REGISTER}`;

export const onChangeEmail = (email) => ({
  type: types.HANDLE_ONCHANGE_EMAIL_FIELD_IN_REGISTER,
  email,
});

export const onChangePassword = (password) => ({
  type: types.HANDLE_ONCHANGE_PASSWORD_FIELD_IN_REGISTER,
  password,
});

export const onChangeRepassword = (repassword) => ({
  type: types.HANDLE_ONCHANGE_REPASSWORD_FIELD_IN_REGISTER,
  repassword,
});

export const fetchDataRegister = () => async (dispatch, getState) => {
  const { registerForm } = getState();

  dispatch(loading.showLoading());

  const res = await axios.post(apiUrl, registerForm);
  if (res.data.error === null) {
    dispatch(loading.hideLoading());
    dispatch(push('/login'));
  } else {
    dispatch(loading.hideLoading());
  }
};

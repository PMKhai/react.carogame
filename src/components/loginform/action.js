import * as types from './constant';

export const onChangeEmail = (email) => ({
  type: types.HANDLE_ONCHANGE_EMAIL_FIELD_IN_LOGIN,
  email,
});

export const onChangePassworrd = (password) => ({
  type: types.HANDLE_ONCHANGE_PASSWORD_FIELD_IN_LOGIN,
  password,
});

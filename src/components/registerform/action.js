import * as types from './constant';

export const onChangeEmail = (email) => ({
  type: types.HANDLE_ONCHANGE_EMAIL_FIELD_IN_REGISTER,
  email,
});

export const onChangePassword = (password) => ({
  type: types.HANDLE_ONCHANGE_REPASSWORD_FIELD_IN_REGISTER,
  password,
});

export const onChangeRepassword = (repassword) => ({
  type: types.HANDLE_ONCHANGE_REPASSWORD_FIELD_IN_REGISTER,
  repassword,
});

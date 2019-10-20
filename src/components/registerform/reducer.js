import * as types from './constant';

const initialState = {
  email: '',
  password: '',
  repassword: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_ONCHANGE_EMAIL_FIELD_IN_REGISTER:
      return { ...state, email: action.email };
    case types.HANDLE_ONCHANGE_PASSWORD_FIELD_IN_REGISTER:
      return { ...state, password: action.password };
    case types.HANDLE_ONCHANGE_REPASSWORD_FIELD_IN_REGISTER:
      return { ...state, repassword: action.repassword };
    default:
      return state;
  }
};

export default reducer;

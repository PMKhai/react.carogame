import * as types from './constant';

const initialState = {
  email: '',
  password: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_ONCHANGE_EMAIL_FIELD_IN_LOGIN:
      return { ...state, email: action.email };
    case types.HANDLE_ONCHANGE_PASSWORD_FIELD_IN_LOGIN:
      return { ...state, password: action.password };
    default:
      return state;
  }
};

export default reducer;

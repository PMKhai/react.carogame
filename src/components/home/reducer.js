import * as types from './constant';

const initialState = {
  email: '',
  gender: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_INFO:
      return {
        ...state,
        email: action.userInfo.email,
        gender: action.userInfo.gender,
      };
    default:
      return state;
  }
};

export default reducer;

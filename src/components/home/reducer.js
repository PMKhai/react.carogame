import * as types from './constant';

const initialState = {
  email: '',
  name: '',
  gender: null,
  picture: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_INFO:
      return {
        ...state,
        email: action.userInfo.email,
        gender: action.userInfo.gender,
        name: action.userInfo.name,
        picture: action.userInfo.picture,
      };
    default:
      return state;
  }
};

export default reducer;

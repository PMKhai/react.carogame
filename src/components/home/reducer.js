import * as types from './constant';

const initialState = {
  email: '',
  name: '',
  gender: null,
  picture: '',
  isLoading: false,
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
    case types.SHOW_LOADING_WHEN_FIND_MATCH:
      return {
        ...state,
        isLoading: true,
      };
    case types.HIDE_LOADING_WHEN_FIND_MATCH:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;

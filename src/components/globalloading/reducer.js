import * as types from './constant';

const initialState = { isLoading: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HIDE_LOADING:
      return { ...state, isLoading: false };
    case types.SHOW_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default reducer;

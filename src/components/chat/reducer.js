import * as types from './constant';

const initialState = {
  username: '',
  message: '',
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TYPE_MESSAGE:
      return { ...state, message: action.message };
    case types.ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.message] };
    case types.GET_USERNAME:
      return { ...state, username: action.username };
    case types.SEND_MESSAGE:
      return { ...state, message: '' };
    default:
      return state;
  }
};

export default reducer;

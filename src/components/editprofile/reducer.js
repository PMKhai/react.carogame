import * as types from './constant';

const initialState = {
  id: '',
  email: '',
  gender: null,
  name: '',
  picture: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_FOR_EDIT:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        id: action.userInfo._id,
        email: action.userInfo.email,
        gender: action.userInfo.gender,
        name: action.userInfo.name,
        picture: action.userInfo.picture,
      };
    case types.CHOOSE_MALE_GENDER:
      return { ...state, gender: true };
    case types.CHOOSE_FEMALE_GENDER:
      return { ...state, gender: false };
    default:
      return state;
  }
};

export default reducer;

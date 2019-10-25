import axios from 'axios';
import { push } from 'connected-react-router';
import { API_URL, ME } from '../../constants';
import * as types from './constant';

const apiUrlGetProfile = `${API_URL}${ME}`;

export const fetchUser = (userInfo) => ({
  type: types.FETCH_USER_FOR_EDIT,
  userInfo,
});

export const handleChooseMaleGender = (gender) => ({
  type: types.CHOOSE_MALE_GENDER,
  gender,
});

export const handleChooseFemaleGender = (gender) => ({
  type: types.CHOOSE_FEMALE_GENDER,
  gender,
});

export const fetchUserFromServer = () => async (dispatch) => {
  try {
    const token = `Bearer ${localStorage.getItem('token')}`;
    const res = await axios.get(apiUrlGetProfile, {
      headers: { Authorization: token },
    });
    if (res.data !== null) dispatch(fetchUser(res.data.data));
  } catch (err) {
    dispatch(push('login'));
  }
};

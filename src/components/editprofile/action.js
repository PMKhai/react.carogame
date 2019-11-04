import axios from 'axios';
import { push } from 'connected-react-router';
import { API_URL, ME, UPDATE } from '../../constants';
import * as types from './constant';
import * as loading from '../globalloading/action';

const apiUrlGetProfile = `${API_URL}${ME}`;
const apiUrlUpdateProfile = `${API_URL}${UPDATE}`;
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

export const handleClickUpdate = () => async (dispatch, getState) => {
  const { editProfile } = getState();
  console.log(editProfile);
  const token = `Bearer ${localStorage.getItem('token')}`;

  dispatch(loading.showLoading());

  try {
    const res = await axios.put(apiUrlUpdateProfile, editProfile, {
      headers: { Authorization: token },
    });
    console.log(res.data);
    dispatch(loading.hideLoading());
    dispatch(push('/'));
  } catch (error) {
    dispatch(loading.hideLoading());
  }
};

export const handleClickCancel = () => (dispatch) => {
  dispatch(push('/'));
};

import { push } from 'connected-react-router';

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(push('/login'));
};

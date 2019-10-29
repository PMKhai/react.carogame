import { connect } from 'react-redux';
import * as actions from '../components/loginform/action';
import LoginForm from '../components/loginform/index';

const mapStateToProps = (state) => ({
  loginForm: state.loginForm,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (email) => {
    dispatch(actions.onChangeEmail(email));
  },
  onChangePassword: (password) => {
    dispatch(actions.onChangePassworrd(password));
  },
  onClickButton: () => {
    dispatch(actions.fetchDataLogin());
  },
  redirectAfterLogin: () => dispatch(actions.redirectAfterLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

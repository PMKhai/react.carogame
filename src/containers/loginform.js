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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

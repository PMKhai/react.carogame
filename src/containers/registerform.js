import { connect } from 'react-redux';
import RegisterForm from '../components/registerform/index';
import * as actions from '../components/registerform/action';

const mapStateToProps = (state) => ({
  registerForm: state.registerForm,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (email) => dispatch(actions.onChangeEmail(email)),
  onChangePassword: (password) => dispatch(actions.onChangePassword(password)),
  onChangeRepassword: (repassword) =>
    dispatch(actions.onChangeRepassword(repassword)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

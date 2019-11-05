import { connect } from 'react-redux';
import * as actions from '../components/logoutbutton/action';
import LogoutButton from '../components/logoutbutton/index';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.logout()),
});

export default connect(
  null,
  mapDispatchToProps
)(LogoutButton);

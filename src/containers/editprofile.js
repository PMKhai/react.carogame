import { connect } from 'react-redux';
import * as actions from '../components/editprofile/action';
import EditProfile from '../components/editprofile/index';

const mapStateToProps = (state) => ({
  editProfile: state.editProfile,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(actions.fetchUserFromServer()),
  handleChooseMale: (gender) =>
    dispatch(actions.handleChooseMaleGender(gender)),
  handleChooseFemale: (gender) =>
    dispatch(actions.handleChooseFemaleGender(gender)),
  handleClickUpdate: () => dispatch(actions.handleClickUpdate()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);

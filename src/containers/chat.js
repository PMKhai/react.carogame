import { connect } from 'react-redux';
import * as actions from '../components/chat/action';
import Chat from '../components/chat/index';

const mapStateToProps = (state) => ({
  chat: state.chat,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputMessage: (message) =>
    dispatch(actions.handleTypeMessage(message)),
  addMessage: (message) => dispatch(actions.addMessage(message)),
  fetchUsername: () => dispatch(actions.fetchUserFromServer()),
  sendMessage: () => dispatch(actions.sendMessage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

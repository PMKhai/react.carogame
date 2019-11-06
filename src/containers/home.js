import { connect } from 'react-redux';
import * as actions from '../components/home/action';
import Home from '../components/home/index';

const mapStateToProps = (state) => ({
  home: state.home,
});

const mapDispatchToProps = (dispatch) => ({
  fecthUser: () => dispatch(actions.fetchUserFromServer()),
  handleClickPlayButtonPvE: () => dispatch(actions.clickPlayButtonPvE()),
  handleClickPlayButtonPvP: () => dispatch(actions.clickPlayButtonPvP()),
  findMatch: (socketId) => dispatch(actions.getRoomId(socketId)),
  hideLoading: () => dispatch(actions.hideLoadingFindMatch()),
  showLoading: () => dispatch(actions.showLoadingFindMatch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

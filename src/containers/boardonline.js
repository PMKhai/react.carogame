import { connect } from 'react-redux';
import * as actions from '../components/boardonline/action';
import BoardOnline from '../components/boardonline/index';

const mapStateToProps = (state) => ({
  boardOnline: state.boardOnline,
});

const mapDispatchToProps = (dispatch) => ({
  clickSquare: (i) => dispatch(actions.clickSquare(i)),
  fetchUsername: () => dispatch(actions.fetchUserFromServer()),
  getTheStartingPosition: (position) =>
    dispatch(actions.getTheStartingPosition(position)),
  loseGame: (winner) => dispatch(actions.loseGame(winner)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardOnline);

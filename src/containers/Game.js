import { connect } from 'react-redux';
import * as actions from '../components/game/action';
import Game from '../components/game/index';

const mapStateToProps = (state) => ({
  game: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  handleClickPlayAgain: () => {
    dispatch(actions.clickPlayAgain());
  },
  handleClick: (i) => {
    dispatch(actions.clickSquare(i));
  },
  jumpTo: (move) => {
    dispatch(actions.jumpTo(move));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

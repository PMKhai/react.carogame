import { connect } from 'react-redux';
import * as actions from '../components/gameonline/action';
import GameOnline from '../components/gameonline/index';

const mapDisptchToProps = (dispatch) => ({
  hideLoading: () => dispatch(actions.hideLoading()),
});

export default connect(
  null,
  mapDisptchToProps
)(GameOnline);

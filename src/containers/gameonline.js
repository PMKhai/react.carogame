import { connect } from 'react-redux';
import * as actions from '../components/gameonline/action';
import GameOnline from '../components/gameonline/index';

const mapDisptchToProps = (dispatch) => ({
  getRoomId: (socketId) => dispatch(actions.getRoomId(socketId)),
});

export default connect(
  null,
  mapDisptchToProps
)(GameOnline);

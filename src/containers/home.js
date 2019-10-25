import { connect } from 'react-redux';
import * as actions from '../components/home/action';
import Home from '../components/home/index';

const mapStateToProps = (state) => ({
  home: state.home,
});

const mapDispatchToProps = (dispatch) => ({
  fecthUser: () => dispatch(actions.fetchUserFromServer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

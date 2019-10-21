import { connect } from 'react-redux';
import GlobalLoading from '../components/globalloading/index';
import * as actions from '../components/globalloading/action';

const mapStateToProps = (state) => ({
  globalLoading: state.globalLoading,
});

const mapDispatchToProps = (dispatch) => ({
  hideLoading: () => dispatch(actions.hideLoading()),
  showLoading: () => dispatch(actions.showLoading()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalLoading);

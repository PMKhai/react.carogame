import * as loading from '../home/action';

export const hideLoading = () => async (dispatch) => {
  dispatch(loading.hideLoadingFindMatch());
};

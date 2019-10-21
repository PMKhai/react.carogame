import { combineReducers } from 'redux';
import game from '../components/game/reducer';
import loginForm from '../components/loginform/reducer';
import registerForm from '../components/registerform/reducer';
import globalLoading from '../components/globalloading/reducer';

const rootReducer = combineReducers({
  game,
  loginForm,
  registerForm,
  globalLoading,
});

export default rootReducer;

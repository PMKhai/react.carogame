import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import game from '../components/game/reducer';
import loginForm from '../components/loginform/reducer';
import registerForm from '../components/registerform/reducer';
import globalLoading from '../components/globalloading/reducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    game,
    loginForm,
    registerForm,
    globalLoading,
  });

export default rootReducer;

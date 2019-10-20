import { combineReducers } from 'redux';
import game from '../components/game/reducer';
import loginForm from '../components/loginform/reducer';
import registerForm from '../components/registerform/reducer';

const rootReducer = combineReducers({ game, loginForm, registerForm });

export default rootReducer;

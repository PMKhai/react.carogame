import { combineReducers } from 'redux';
import game from '../components/game/reducer';

const rootReducer = combineReducers({ game });

export default rootReducer;

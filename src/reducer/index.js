import { combineReducers } from 'redux';
import detailReducer from './detailReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
    games: gameReducer,
    detail: detailReducer
});

export default rootReducer;
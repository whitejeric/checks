import { combineReducers } from 'redux';
import BoardReducer from './reducer-board';

const rootReducer = combineReducers({
  board: BoardReducer
});

export default rootReducer;

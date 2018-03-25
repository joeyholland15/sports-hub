import { combineReducers } from 'redux';
import mlb from './MlbReducer';

const rootReducer = combineReducers({
  mlb,
});

export default rootReducer;

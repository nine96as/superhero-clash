import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import statReducer from './statReducer';

const allReducers = combineReducers({
  hero: heroReducer,
  stat: statReducer
});

export default allReducers;

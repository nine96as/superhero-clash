import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import heroReducer from './reducers/heroReducer';

const composedFunctions = composeWithDevTools(...[applyMiddleware(thunk)]);

const store = createStore(heroReducer, composedFunctions);

export default store;

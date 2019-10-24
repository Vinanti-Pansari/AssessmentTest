import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import combineReducer from './reducer';

const middleware = [thunkMiddleWare];

export const store = createStore(combineReducer, applyMiddleware(...middleware));
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rocketReducer from './reducers';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rocketReducer,
  composeEnhancers ? composeEnhancers(applyMiddleware(thunk)) : applyMiddleware(thunk)
);

export default store;
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from '../reducers/index';

export default function configureStore(initialState = {}) {
  return createStore(reducers, initialState, applyMiddleware(thunk, promiseMiddleware()));
}
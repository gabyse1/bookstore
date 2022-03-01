import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import booksReducer from './books/booksReducer';

const rootReducer = combineReducers({
  booksReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;

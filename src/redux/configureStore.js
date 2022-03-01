import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/booksReducer';

const rootReducer = combineReducers({
  booksReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { reducer as form } from 'redux-form';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BASE_API_URL } from '../constants/path';
import nav from '../navigation/reducer';
import phonelogs from './reducers/phonelogs';

const API = axios.create({
  baseURL: BASE_API_URL,
  responseType: 'json',
});

const reducers = combineReducers({
  form,
  nav,
  phonelogs,
});

const middleware = applyMiddleware(
  axiosMiddleware(API),
  createLogger(),
  ReduxThunk,
);

const store = createStore(reducers, middleware);

export default store;

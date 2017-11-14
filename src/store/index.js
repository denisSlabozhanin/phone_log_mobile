import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import defaultConfig  from '@redux-offline/redux-offline/lib/defaults';
/*import axios from 'axios';*/
/*import axiosMiddleware from 'redux-axios-middleware';*/
import { reducer as form } from 'redux-form';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import nav from '../navigation/reducer';
import phonelogs from './reducers/phonelogs';

const reducers = combineReducers({
  nav,
  phonelogs,
});

const appliedMaiddleware = applyMiddleware(
  createLogger(),
  ReduxThunk,
);

const store = createStore(
  reducers,
  appliedMaiddleware,
);

export default store;

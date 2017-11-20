import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const prepareStore = (reducers, isDev = true) => {
  const middlewares = [ReduxThunk];

  if (isDev) {
    middlewares.push(logger);
  }

  const middle = applyMiddleware(...middlewares);

  const composeEnhancers = composeWithDevTools({
    realtime: true,
  });

  const rootReducer = combineReducers({
    ...reducers,
  });

  const configureStore = initialState =>
    createStore(
      rootReducer,
      initialState,
      isDev ? composeEnhancers(middle) : compose(middle),
    );

  return configureStore();
};

export default prepareStore;

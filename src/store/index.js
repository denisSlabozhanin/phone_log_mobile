import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { reducer as form } from 'redux-form';
import prepareStore from './prepareStore';
import nav from '../navigation/reducer';
import app from './reducers/appReducer';
import phonelogs from './reducers/phonelogs';

const ReduxPersist = {
  active: true,
  reducerVersion: '6',
  storeConfig: {
    storage: AsyncStorage,
    whitelist: ['nav', 'form', 'phonelogs', 'app'],
  },
};

const store = prepareStore({
  nav,
  form,
  phonelogs,
  app,
  autoRehydrate,
});

const config = ReduxPersist.storeConfig;
persistStore(store, config);

export default store;

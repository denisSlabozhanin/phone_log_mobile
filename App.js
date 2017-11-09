/* eslint no-console: 0 */
import 'intl';
import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './src/navigation';
import store from './src/store';

const App = props => (
  <Provider store={store}>
    <RootNavigator {...props} />
  </Provider>
);

export default App;

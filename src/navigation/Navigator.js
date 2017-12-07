/* eslint new-cap: 0 */
import React from 'react';
import { TabNavigator } from 'react-navigation';
import PhonelogsLayout from './layouts/PhonelogsLayout';
import Login from '../modules/user/containers/Login';

const tabOptions = {
  navigationOptions: {
    tabBarVisible: false,
  },
  animationEnabled: false,
};

export default TabNavigator(
  {
    Login: {
      screen: Login,
    },
    Phonelogs: {
      screen: PhonelogsLayout,
    },
  },
  {
    ...tabOptions,
    swipeEnabled: false,
    lazy: true,
  },
);

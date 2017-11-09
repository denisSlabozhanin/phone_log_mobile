/* eslint new-cap: 0 */
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { APP_ROUTE } from '../constants/routes';
import HeaderTitle from './components/HeaderTitle';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';
import PhonelogsList from '../modules/phoneLogs/containers/PhonelogsList';
import MainMenu from '../modules/phoneLogs/containers/MainMenu';
import styles from '../constants/styles';

const applicationStatusBar = {
  contentComponent: <HeaderRight />,
  headerMode: 'screen',
  navigationOptions: ({ navigation }) => ({
    headerStyle: styles.defaultHeader.style,
    headerTitle: <HeaderTitle />,
    headerTitleStyle: styles.defaultHeader.title,
    headerLeft: <HeaderLeft navigation={navigation} />,
    headerRight: <HeaderRight />,
  }),
};

const tabOptions = {
  navigationOptions: {
    tabBarVisible: false,
  },
};

const stackOptions = {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: '#282A2D',
    opacity: 1,
  },
};

const Phonelogs = {
  screen: StackNavigator(
    {
      Home: {
        screen: PhonelogsList,
      },
      MainMenu: {
        screen: MainMenu,
      },
    },
    {
      ...stackOptions,
    },
  ),
};

const App = {
  screen: StackNavigator(
    {
      Phonelogs,
    },
    {
      ...applicationStatusBar,
    },
  ),
  ...tabOptions,
};


export default TabNavigator(
  {
    App,
  },
  {
    initialRouteName: APP_ROUTE,
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
  },
);

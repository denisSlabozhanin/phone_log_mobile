/* eslint new-cap: 0 */
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HeaderTitle from './components/HeaderTitle';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';
import PhonelogsList from '../modules/phoneLogs/containers/PhonelogsList';
import MainMenu from '../modules/phoneLogs/containers/MainMenu';
import FiltersMenu from '../modules/phoneLogs/containers/LabelsMenu';
import styles from '../constants/styles';
import UserSelect from '../modules/phoneLogs/containers/UserSelect';

const applicationStatusBar = {
  contentComponent: <HeaderRight />,
  headerMode: 'screen',
  navigationOptions: ({ navigation }) => ({
    headerStyle: styles.defaultHeader.style,
    headerTitle: <HeaderTitle />,
    headerTitleStyle: styles.defaultHeader.title,
    headerLeft: <HeaderLeft navigation={navigation} />,
    headerRight: <HeaderRight navigation={navigation} />,
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
    backgroundColor: 'transparent',
    opacity: 1,
  },
};

const Phonelogs = {
  screen: StackNavigator(
    {
      Home: {
        screen: PhonelogsList,
      },
      UserSelect: {
        screen: UserSelect,
      },
      MainMenu: {
        screen: MainMenu,
      },
      FiltersMenu: {
        screen: FiltersMenu,
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
};

export default TabNavigator(
  {
    App,
  },
  {
    ...tabOptions,
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
  },
);

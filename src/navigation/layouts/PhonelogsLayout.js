import React, { Component } from 'react';
import ActionBar from '../../modules/phoneLogs/containers/ActionBar';
import {View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import PhonelogsList from '../../modules/phoneLogs/containers/PhonelogsList';
import UserSelect from '../../modules/phoneLogs/containers/UserSelect';
import MainMenu from '../../modules/phoneLogs/containers/MainMenu';
import LabelsMenu from '../../modules/phoneLogs/components/LabelsMenu/index';
import HeaderTitle from '../components/HeaderTitle/index';
import HeaderLeft from '../components/HeaderLeft/index';
import HeaderRight from '../components/HeaderRight/index';
import styles from '../../constants/styles';

const applicationStatusBar = {
  headerMode: 'screen',
  navigationOptions: ({ navigation }) => ({
    headerStyle: styles.defaultHeader.style,
    headerTitle: <HeaderTitle />,
    headerTitleStyle: styles.defaultHeader.title,
    headerLeft: <HeaderLeft navigation={navigation} />,
    headerRight: <HeaderRight navigation={navigation} />,
  }),
};

const stackOptions = {
  cardStyle: {
    backgroundColor: 'transparent',
    opacity: 1,
  },
  animationEnabled: false,
};

const PhonelogsNavigator = StackNavigator(
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
    LabelsMenu: {
      screen: LabelsMenu,
    },
  },
  {
    ...applicationStatusBar,
    ...stackOptions,
  },
);

class PhonelogsLayout extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <PhonelogsNavigator />
        <ActionBar />
      </View>
    );
  }
}

export default PhonelogsLayout;

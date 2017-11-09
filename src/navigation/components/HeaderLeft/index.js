import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
} from 'react-native';
import { Icon } from './style';
import { MAIN_MENU_ROUTE, HOME_ROUTE } from '../../../constants/routes';

const navigate = (navigation) => {
  const currentRouteIndex = navigation.state.routes.length - 1;
  const currentRoute = navigation.state.routes[currentRouteIndex];
  if (currentRoute.routeName === HOME_ROUTE) {
    navigation.navigate(MAIN_MENU_ROUTE);
  } else {
    navigation.navigate(HOME_ROUTE);
  }
};

const HeaderLeft = ({ navigation }) => (
  <TouchableHighlight onPress={() => navigate(navigation)}>
    <Icon>{'Icon'}</Icon>
  </TouchableHighlight>
);

HeaderLeft.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HeaderLeft;

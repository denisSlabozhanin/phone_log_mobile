import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../components/Icon';
import { MAIN_MENU_ROUTE } from '../../../constants/routes';
import { Touchable } from '../../../shared/styles';
import { Padded } from './style';

const navigate = (navigation) => {
  const currentRouteIndex = navigation.state.routes.length - 1;
  const currentRoute = navigation.state.routes[currentRouteIndex];
  if (currentRoute.routeName !== MAIN_MENU_ROUTE) {
    navigation.navigate(MAIN_MENU_ROUTE);
  } else {
    navigation.navigate(navigation.state.routes[currentRouteIndex - 1].routeName);
  }
};

const HeaderLeft = ({ navigation }) => (
  <Touchable onPress={() => navigate(navigation)}>
    <Padded>
      <Icon name={'humburgerMenu'} />
    </Padded>
  </Touchable>
);

HeaderLeft.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HeaderLeft;

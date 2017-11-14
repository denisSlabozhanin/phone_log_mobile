import React from 'react';
import { FILTERS_MENU_ROUTE } from '../../../constants/routes';
import Icon from '../../../components/Icon/index';
import { Touchable } from '../../../shared/styles';
import { Padded } from './style';

const navigate = (navigation) => {
  navigation.navigate(FILTERS_MENU_ROUTE);
};

const HeaderRight = ({ navigation }) => (
  <Touchable onPress={() => navigate(navigation)}>
    <Padded>
      <Icon name={'search'} />
    </Padded>
  </Touchable>
);

export default HeaderRight;

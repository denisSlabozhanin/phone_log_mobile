import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import { FILTERS_MENU_ROUTE } from '../../../constants/routes';

const navigate = (navigation) => {
  navigation.navigate(FILTERS_MENU_ROUTE);
};

const HeaderRight = ({ navigation }) => (
  <TouchableHighlight onPress={() => navigate(navigation)}>
    <Text style={{ color: '#fff' }}>{'Icon'}</Text>
  </TouchableHighlight>
);

export default HeaderRight;

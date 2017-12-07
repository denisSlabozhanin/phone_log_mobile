import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ActionBar from './ActionBar';
import MainMenuComponent from '../components/MainMenu';

class MainMenu extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <MainMenuComponent />
    );
  }
}

MainMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MainMenu;

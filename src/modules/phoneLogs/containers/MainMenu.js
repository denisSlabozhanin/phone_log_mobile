import React, { Component } from 'react';
import { View } from 'react-native';
import ActionBar from './ActionBar';
import MainMenuComponent from '../components/MainMenu';

class MainMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainMenuComponent />
        <ActionBar>
        </ActionBar>
      </View>
    );
  }
}

export default MainMenu;

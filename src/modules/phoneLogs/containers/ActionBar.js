import React, { Component } from 'react';
import ActionBarCmp from '../components/ActionBar/index';
import { FILTERS_MENU_ROUTE } from '../../../constants/routes';

class ActionBar extends Component {
  openFilters() {
    const {
      navigation,
    } = this.props;

    navigation.navigate(FILTERS_MENU_ROUTE);
  }

  render() {
    return (
      <ActionBarCmp
        openFilters={() => this.openFilters()}
      />
    );
  }
}

export default ActionBar;

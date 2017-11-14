import React, { Component } from 'react';
import FiltersMenuCmp from '../components/FiltersMenu';
import { HOME_ROUTE } from '../../../constants/routes';

class FiltersMenu extends Component {
  render() {
    const {
      navigation,
    } = this.props;
    return (
      <FiltersMenuCmp
        onModalClose={() => { navigation.navigate(HOME_ROUTE); }}
      />
    );
  }
};

export default FiltersMenu;

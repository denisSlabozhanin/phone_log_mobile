import React, { Component } from 'react';
import LabelsMenuCmp from '../components/LabelsMenu';
import { HOME_ROUTE } from '../../../constants/routes';

class LabelsMenu extends Component {

  closeModal() {
    this.props.navigation.navigate(HOME_ROUTE); // TODO: Handle in good way
  }

  render() {
    const { navigation } = this.props;
    return (
      <LabelsMenuCmp
        navigation = {navigation}
        onModalClose={() => this.closeModal()}
      />
    );
  }
};

export default LabelsMenu;

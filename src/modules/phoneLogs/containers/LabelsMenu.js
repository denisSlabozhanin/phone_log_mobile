import React, { Component } from 'react';
import LabelsMenuCmp from '../components/LabelsMenu';

class LabelsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: this.props.isOpened || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpened: nextProps.isOpened });
  }

  closeModal() {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <LabelsMenuCmp
        isOpened={this.state.isOpened}
        onModalClose={() => this.closeModal()}
      />
    );
  }
};

export default LabelsMenu;

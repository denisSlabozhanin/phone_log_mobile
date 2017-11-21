import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PhonelogsContainer,
} from './style';
import ActionBar from '../../containers/ActionBar';

class Phonelogs extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <PhonelogsContainer>
          {this.props.renderPhonelogs()}
        </PhonelogsContainer>
        <ActionBar
          navigation={navigation}
        />
      </Container>
    );
  }
}

Phonelogs.propTypes = {
  navigation: PropTypes.object.isRequired,
  renderPhonelogs: PropTypes.func.isRequired,
};

export default Phonelogs;

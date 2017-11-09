import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PhonelogsContainer,
} from './style';
import ActionBar from '../../containers/ActionBar';

class Phonelogs extends Component {
  render() {
    return (
      <Container>
        <PhonelogsContainer>
          {this.props.renderPhonelogs()}
        </PhonelogsContainer>
        <ActionBar />
      </Container>
    );
  }
}

Phonelogs.propTypes = {
  renderPhonelogs: PropTypes.func.isRequired,
};

export default Phonelogs;

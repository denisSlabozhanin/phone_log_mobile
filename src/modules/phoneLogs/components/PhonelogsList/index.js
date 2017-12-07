import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PhonelogsContainer,
} from './style';
import ActionBar from '../../containers/ActionBar';
import EmptyList from './EmptyList/index';
import PhonelogListItem from './ListItem/PhonelogListItem';

class Phonelogs extends Component {
  renderItem(phonelog) {
    return (
      <PhonelogListItem
        key={phonelog.id}
        isEditMode={this.props.isEditMode}
        {...phonelog}
      />
    );
  }

  render() {
    const {
      phonelogs,
    } = this.props;

    return (
      <Container>
        <PhonelogsContainer>
          {
            phonelogs.length === 0
              ? <EmptyList />
              : phonelogs.map(phonelog => this.renderItem(phonelog))
          }
        </PhonelogsContainer>
      </Container>
    );
  }
}

Phonelogs.propTypes = {
  phonelogs: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Phonelogs;

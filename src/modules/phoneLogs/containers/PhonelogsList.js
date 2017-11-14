import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../store/actionCreators/phonelogsActions';
import Phonelogs from '../components/PhonelogsList/index';
import PhonelogListItem from '../components/PhonelogsList/ListItem/PhonelogListItem';
import PreloaderScreen from '../../../components/PreloaderScreen/index';
import EmptyList from '../components/PhonelogsList/EmptyList';
import {getPhoneLogs} from '../../../store/actionCreators/phonelogsActions';

class PhonelogsList extends Component {
  componentWillMount() {
    if (this.props.phonelogs.length === 0) {
      this.props.getPhoneLogs();
    }
  }

  renderPhonelogs() {
    const {
      phonelogs,
    } = this.props;

    return phonelogs.length === 0
      ? <EmptyList />
      : phonelogs.map((phonelog, index) =>
        <PhonelogListItem
          key={index}
          {...phonelog}
        />
      );
  }

  render() {
    const {
      isPending,
    } = this.props;

    return isPending
      ? (
        <PreloaderScreen />
      )
      : (
        <Phonelogs
          renderPhonelogs={() => this.renderPhonelogs()}
        />
      );
  }
}

PhonelogsList.propTypes = {
  phonelogs: PropTypes.array.isRequired,
  getPhoneLogs: PropTypes.func.isRequired,
};

const mapStateToProps = ({ phonelogs }) => ({
  phonelogs: phonelogs.phonelogsList,
  isPending: phonelogs.isPendingPhoneLogs,
});

export default connect(mapStateToProps, actions)(PhonelogsList);

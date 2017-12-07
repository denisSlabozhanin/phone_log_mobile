import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../store/actionCreators/appActions';
import ActionBarCmp from '../components/ActionBar/index';

class ActionBar extends Component {
  openFilters() {
    const {
    } = this.props;
  }

  editList() {
    const {
      setEditMode,
      isListEditMode,
    } = this.props;

    setEditMode(!isListEditMode);
  }

  render() {
    return (
      <ActionBarCmp
        openFilters={() => this.openFilters()}
        editList={() => this.editList()}
      />
    );
  }
}

ActionBar.propTypes = {
  setEditMode: PropTypes.func.isRequired,
  isListEditMode: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ app }) => ({
  isListEditMode: app.isListEditMode,
});

export default connect(mapStateToProps, actions)(ActionBar);

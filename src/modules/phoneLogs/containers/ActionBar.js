import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../store/actionCreators/appActions';
import ActionBarCmp from '../components/ActionBar/index';
import { FILTERS_MENU_ROUTE, HOME_ROUTE } from '../../../constants/routes';

class ActionBar extends Component {
  openFilters() {
    const {
      navigation,
    } = this.props;
    const currentRoute = navigation.state.routeName;

    if (currentRoute !== FILTERS_MENU_ROUTE) {
      navigation.navigate(FILTERS_MENU_ROUTE);
    } else {
      navigation.navigate(HOME_ROUTE);
    }
  }

  openEditList() {
    this.props.setEditMode(true);
  }

  render() {
    const { navigation } = this.props;
    return (
      <ActionBarCmp
        openFilters={() => this.openFilters()}
        openEditList={() => this.openEditList()}
        navigation={navigation}
      />
    );
  }
}

ActionBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, actions)(ActionBar);

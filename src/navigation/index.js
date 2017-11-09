import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';
import Navigator from './Navigator';

class RootNavigator extends Component {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      console.log('Global Back Press Handler has been executed');
    });
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <Navigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
        })}
      />
    );
  }
}

RootNavigator.propTypes = {
  nav: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(RootNavigator);

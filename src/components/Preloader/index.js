import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

const Preloader = ({ color, style }) =>
  <ActivityIndicator style={style} color={color} />;

Preloader.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

Preloader.defaultProps = {
  color: '#000',
};

Preloader.defaultProps = {
  style: {},
};

export default Preloader;

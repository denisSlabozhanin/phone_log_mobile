import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader';
import { Container } from './style';

const PreloaderScreen = props => {
  const { style } = props;
  return (
    <Container {...style}>
      <Preloader color={'#fff'} />
    </Container>
  );
};

PreloaderScreen.propTypes = {
  style: PropTypes.object,
};

PreloaderScreen.defaultProps = {
  style: {},
};

export default PreloaderScreen;

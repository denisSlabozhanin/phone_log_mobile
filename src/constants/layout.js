import { Dimensions, Platform } from 'react-native';

const {
  height,
  width,
} = Dimensions.get('window');

export default {
  os: Platform.OS,
  window: {
    width,
    height,
  },
  majorDimension: width > height ? width : height,
  minorDimension: width < height ? width : height,
};

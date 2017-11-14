import { Dimensions, Platform } from 'react-native';

const {
  height,
  width,
} = Dimensions.get('window');

export const actionBarHeight = 40;
export const topBarHeight = 50;

const layout = {
  os: Platform.OS,
  window: {
    width,
    height,
  },
  contentHeight: height - (actionBarHeight + topBarHeight),
  majorDimension: width > height ? width : height,
  minorDimension: width < height ? width : height,
};

export default layout;

import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import layout, { actionBarHeight } from '../../../../constants/layout';

const { width, height } = Dimensions.get('window');

export const ModalWrapper = styled.View`
  display: ${({ isOpened }) => isOpened ? 'flex' : 'none'};
  position: relative;
  height: ${height};
  width: ${width};
  flex: 1;
`;

export const ModalBackground = styled.View`
  flex: 1;
  backgroundColor: #000;
  opacity: 0.7;
`;

export const ContentHolder = styled.View`
  flex: 1;
`;

export const ModalContentContainer = styled.ScrollView`
  margin-top: auto;
  width: ${width};
  border-radius: 10;
  padding-vertical: 10;  
  background-color: #fff;
`;

export const LabelItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1;
  border-bottom-color: #eee;
  padding-vertical: 10;
  padding-horizontal: 10;
`;

export const LabelText = styled.Text`
  color: #000;
  font-size: 15;
`;

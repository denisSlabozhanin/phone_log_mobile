import styled from 'styled-components/native';
import layout, { actionBarHeight } from '../../../../constants/layout';

export const ModalWrapper = layout.os === 'android'
  ? styled.TouchableNativeFeedback`
      flex: 1;
      position: relative;
    `
  : styled.TouchableWithoutFeedback`
      flex: 1;
      position: relative;
    `;

export const ModalBackground = styled.View`
  flex: 1;
  backgroundColor: #000;
  opacity: 0.7;  
`;

export const ContentHolder = styled.ScrollView`
  flex: 1;
`;

export const ModalContentContainer = styled.View`
  position: absolute;
  bottom: ${actionBarHeight};
  left: 0;
  width: 100%;
  border-radius: 10;
  padding-vertical: 10;  
  background-color: #fff;
`;

export const FilterItem = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #eee;
  padding-vertical: 10;
  padding-horizontal: 10;
`;

export const FilterLabel = styled.Text`
  color: #000;
  font-size: 15;
`;

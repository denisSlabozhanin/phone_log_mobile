import styled from 'styled-components/native';
import layout from '../../constants/layout';

export const Touchable = layout.os === 'android'
  ? styled.TouchableNativeFeedback`
      
    `
  : styled.TouchableWithoutFeedback`
    `;

export const OuterCircle = styled.View`
  height: 20;
  width: 20;
  padding-vertical: 2;
  padding-horizontal: 2;
  border-width: 1;
  border-color: #95989A;
  border-radius: 20;
  overflow: hidden;
`;

export const InnerCircle = styled.View`
  height: 14;
  width: 14;
  background-color: #2489C8;
  border-radius: 20;
`;

export const Label = styled.Text`
  font-size: 15;
  color: #000;
`;

export const ContentHolder = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

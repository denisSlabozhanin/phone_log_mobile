import styled from 'styled-components/native';
import layout from '../../constants/layout';

export const Touchable = layout.os === 'android'
  ? styled.TouchableNativeFeedback`
      
    `
  : styled.TouchableWithoutFeedback`
    `;

export const OuterBox = styled.View`
  height: 19;
  width: 19;
  padding-vertical: 4;
  padding-horizontal: 4;
  border-width: 1;
  border-color: #95989A;
  border-radius: 3;
  overflow: hidden;
`;

export const Inner = styled.Image`
  height: 10;
  width: 10;
`;

export const Label = styled.Text`
  font-size: 15;
  color: #000;
  padding-left: 10;
`;

export const ContentHolder = styled.View`
`;

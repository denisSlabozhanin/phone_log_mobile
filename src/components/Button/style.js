import styled from 'styled-components/native';
import layout from '../../constants/layout';

export const BtnWrapper = layout.os === 'android'
  ? styled.TouchableNativeFeedback`
    `
  : styled.TouchableWithoutFeedback`
    `;

export const BtnContent = styled.View`
  background-color: #2489C8;
  border-radius: 4;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BtnLabel = styled.Text`
  padding-vertical: 7;
  padding-horizontal: 14;
  color: #fff;
  font-size: 10;
`;

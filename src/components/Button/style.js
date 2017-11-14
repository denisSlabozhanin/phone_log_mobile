import styled from 'styled-components/native';
import layout from '../../constants/layout';

export const BtnWrapper = layout.os === 'android'
  ? styled.TouchableNativeFeedback`
      background-color: #2489C8;
      padding-vertical: 10;
      padding-horizontal: 20;
      border-radius: 4;
    `
  : styled.TouchableWithoutFeedback`
      background-color: #2489C8;
      padding-vertical: 10;
      padding-horizontal: 20;
      border-radius: 4;
    `;

export const BtnLabel = styled.Text`
  color: #fff;
  font-size: 13;
`;

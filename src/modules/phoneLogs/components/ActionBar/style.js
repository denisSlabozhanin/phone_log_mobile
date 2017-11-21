import styled from 'styled-components/native';
import layout, { actionBarHeight } from '../../../../constants/layout';

export const Container = styled.View`
  height: ${actionBarHeight};
  background-color: #282A2D;
  flex-direction: row;
  justify-content: space-between;
`;

export const Touchable = layout.os === 'android'
  ? styled.TouchableNativeFeedback`
      
    `
  : styled.TouchableWithoutFeedback`
    `;

export const Select = styled.Text`
  color: #fff;
  font-size: 12;
  padding-top: 12;
`;

export const Status = styled.Text`
  text-align: center;
  color: #fff;
  margin-top: 12;
  font-size: 11;
`;

export const FiltersOpen = styled.Text`
  color: #fff;
  font-size: 12;
  padding-top: 12;
`;

export const IconWrapper = styled.View`
  padding-top: ${({ fromTop }) => fromTop};
  padding-horizontal: 15;
`;

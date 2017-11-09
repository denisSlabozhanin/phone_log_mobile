import styled from 'styled-components/native';
import layout from '../../../../../constants/layout';

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${layout.window.height - 100};
`;

export const EmptyText = styled.Text`
  text-align: center;
  align-self: center;
  font-size: 12;
`;

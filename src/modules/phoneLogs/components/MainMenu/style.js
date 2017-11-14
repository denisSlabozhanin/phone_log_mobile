import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #282A2D;
  flex: 1;
`;

export const Panel = styled.View`
  background: #fff,
  overflow: hidden;
  border-radius: 10;
`;

export const PanelTitle = styled.Text`
  color: #aaa;
  font-size: 13;
  background: #fff,
  padding-top: 15;
  padding-bottom: 10;
  padding-horizontal: 15;
  border-bottom-color: #eee;
  border-bottom-width: 1;
`;

export const PanelItem = styled.TouchableHighlight`
  background: #fff,
  padding-vertical: 15;
  padding-horizontal: 15;
  border-bottom-color: #eee;
  border-bottom-width: 1;
`;

export const ItemText = styled.Text`
  color: #000;
  font-size: 13;
`;

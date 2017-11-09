import styled from 'styled-components/native';

export const PhonelogContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-vertical: 10;
  padding-horizontal: 20;
  border-bottom-color: #eee;
  border-bottom-width: 1;
`;

export const IndicatorsBar = styled.View`
  padding-right: 10;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Heading = styled.View`
   flex-direction: row;
   justify-content: space-between;
`;

export const Notes = styled.Text`
  flex: 1;
  font-size: 12;
  margin-top: 5;
`;

export const Urgent = styled.View`
  height: 8;
  width: 8;
  margin-top: 5;
  border-radius: 10;
  background-color: #FF0032;
`;

export const Inform = styled.View`
  height: 8;
  width: 8;
  margin-top: 2;
  border-radius: 10;
  background-color: #008BC2;
`;

export const CallTime = styled.Text`
  font-size: 12;
  color: #000;
  margin-top: 5;
`;

export const CallStatus = styled.Text`
  font-size: 11;
  color: #000;
`;

export const ContactName = styled.Text`
  font-size: 17;
  color: #000;
`;

export const PhoneNumber = styled.Text`
  font-size: 11;
  color: #000;
`;

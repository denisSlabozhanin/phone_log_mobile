import React from 'react';
import PropTypes from 'prop-types';
import {
  Notes,
  Urgent,
  Footer,
  Content,
  Heading,
  Inform,
  CallTime,
  CallStatus,
  ContactName,
  PhoneNumber,
  IndicatorsBar,
  PhonelogContainer,
} from './style';

const PhonelogsListItem = ({
  contactName,
  callStatus,
  notes,
  urgent,
  inform,
  phoneNumber,
  callTime,
}) => (
  <PhonelogContainer>
    <IndicatorsBar>
      <Urgent style={{ display: urgent ? 'flex' : 'none' }} />
      <Inform style={{ display: inform ? 'flex' : 'none' }} />
    </IndicatorsBar>
    <Content>
      <Heading>
        <ContactName>{contactName}</ContactName>
        <CallTime>{callTime}</CallTime>
      </Heading>
      <Notes>{notes}</Notes>
      <Footer>
        <PhoneNumber>{phoneNumber}</PhoneNumber>
        <CallStatus>{callStatus}</CallStatus>
      </Footer>
    </Content>
  </PhonelogContainer>
);

PhonelogsListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  callStatus: PropTypes.string,
  notes: PropTypes.string,
  urgent: PropTypes.bool,
  inform: PropTypes.bool,
  phoneNumber: PropTypes.string.isRequired,
  callTime: PropTypes.string,
};

PhonelogsListItem.defaultProps = {
  callStatus: '',
  notes: '',
  urgent: false,
  inform: false,
  callTime: '',
};

export default PhonelogsListItem;

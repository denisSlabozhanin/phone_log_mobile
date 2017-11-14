import React from 'react';
import {
  Log,
  Phone,
  TitleText,
  TitleContainer,
} from './style';
import Icon from '../../../components/Icon';

const HeaderTitle = () => (
  <TitleContainer>
    <Icon
      name={'logo'}
      style={{ marginRight: 2 }}
    />
    <TitleText>
      <Phone>PHONE<Log>LOG</Log></Phone>
    </TitleText>
  </TitleContainer>
);

export default HeaderTitle;

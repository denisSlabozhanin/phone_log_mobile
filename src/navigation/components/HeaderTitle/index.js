import React from 'react';
import {
  Log,
  Phone,
  TitleText,
  TitleContainer,
} from './style';

const HeaderTitle = () => (
  <TitleContainer>
    <TitleText>
      <Phone>PHONE<Log>LOG</Log></Phone>
    </TitleText>
  </TitleContainer>
);

export default HeaderTitle;

import React from 'react';
import {
  Container,
  Status,
  Touchable,
  IconWrapper,
} from './style';
import Icon from '../../../../components/Icon';

const ActionBarCmp = ({
  openFilters,
  editList,
}) => (
  <Container>
    <Touchable onPress={() => editList()}>
      <IconWrapper fromTop={11}>
        <Icon name={'editList'} />
      </IconWrapper>
    </Touchable>
    <Status>Updated Now</Status>
    <Touchable onPress={() => openFilters()}>
      <IconWrapper fromTop={10}>
        <Icon name={'addCallIcon'} />
      </IconWrapper>
    </Touchable>
  </Container>
);

export default ActionBarCmp;

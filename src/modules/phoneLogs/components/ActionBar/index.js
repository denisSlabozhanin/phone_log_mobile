import React from 'react';
import {
  Container,
  Status,
  FiltersOpen,
  Touchable,
  Select,
} from './style';

const ActionBarCmp = ({
  openFilters,
}) => (
  <Container>
    <Touchable>
      <Select>Icon</Select>
    </Touchable>
    <Status>Updated Now</Status>
    <Touchable onPress={() => openFilters()}>
      <FiltersOpen>Icon</FiltersOpen>
    </Touchable>
  </Container>
);

export default ActionBarCmp;

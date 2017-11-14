import React from 'react';
import {
  ModalWrapper,
  ModalBackground,
  ModalContentContainer,
  FilterItem,
  FilterLabel,
  ContentHolder,
} from './style';
import CheckBox from '../../../../components/CheckBox/index';
import RadioBtn from '../../../../components/RadioBtn/index';
import Button from '../../../../components/Button/index';

const FiltersMenuCmp = ({
  onModalClose,
}) => (
  <ModalWrapper onPress={() => onModalClose()}>
    <ContentHolder>
      <ModalBackground />
      <ModalContentContainer>
        <FilterItem>
          <FilterLabel>
            Incomming
          </FilterLabel>
        </FilterItem>
        <FilterItem>
          <FilterLabel>
            Outgoing
          </FilterLabel>
        </FilterItem>
        <FilterItem>
          <FilterLabel>
            Label
          </FilterLabel>
        </FilterItem>
        <FilterItem>
        </FilterItem>
      </ModalContentContainer>
    </ContentHolder>
  </ModalWrapper>
);

export default FiltersMenuCmp;

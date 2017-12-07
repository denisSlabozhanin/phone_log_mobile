import React from 'react';
import {
  ModalWrapper,
  ModalBackground,
  ModalContentContainer,
  LabelItem,
  LabelText,
  ContentHolder,
} from './style';
import Button from '../../../../components/Button/index';
import { Touchable } from '../../../../shared/styles';

const LabelsMenuCmp = ({
  onModalClose,
  isOpened,
}) => (
  <ModalWrapper show={isOpened}>
    <ContentHolder>
      <Touchable
        onPress={() => onModalClose()}
        styles={{ flex: 1 }}
      >
        <ModalBackground />
      </Touchable>
      <ModalContentContainer>
        <LabelItem>
          <LabelText>
            Incomming
          </LabelText>
        </LabelItem>
        <LabelItem>
          <LabelText>
            Outgoing
          </LabelText>
        </LabelItem>
        <LabelItem>
          <LabelText>
            Label
          </LabelText>
        </LabelItem>
        <LabelItem>
          <LabelText>
            CBS Executives
          </LabelText>
        </LabelItem>
        <Button
          label={'ADD LABEL'}
          style={{ marginVertical: 15, marginHorizontal: 10, }}
        />
      </ModalContentContainer>
    </ContentHolder>
  </ModalWrapper>
);

export default LabelsMenuCmp;

import React from 'react';
import {
  BtnWrapper,
  BtnLabel,
} from './style';

const Button = ({
  label,
  onPress,
  containerStyle,
}) => (
  <BtnWrapper
    style={{ ...containerStyle }}
    onPress={() => onPress()}
  >
    <BtnLabel>{label}</BtnLabel>
  </BtnWrapper>
);

export default Button;

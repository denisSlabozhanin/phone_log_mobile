import React from 'react';
import {
  BtnWrapper,
  BtnContent,
  BtnLabel,
} from './style';

const Button = ({
  label,
  onPress,
  style,
}) => {
  const width = {
    small: 90,
    medium: 120,
  };

  return (
    <BtnWrapper
      onPress={() => onPress()}
    >
      <BtnContent
        style={{
          ...style,
          width: width.small,
        }}
      >
        <BtnLabel>{label}</BtnLabel>
      </BtnContent>
    </BtnWrapper>
  );
};

export default Button;

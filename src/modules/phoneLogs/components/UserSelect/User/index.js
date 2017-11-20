import React from 'react';
import {
  UserContainer,
  UserPic,
  UserName,
} from './style';
import UserThumb from '../../../../../components/UserThumb/index';

const User = ({
  name,
}) => (
  <UserContainer>
    <UserThumb />
    <UserName>{name}</UserName>
  </UserContainer>
);

export default User;

import React from 'react';
import {
  UserPic,
  ThumbContainer,
} from './style';
import person from '../../assets/images/person.jpg';

const UserThumb = () => (
  <ThumbContainer>
    <UserPic
      source={person}
    />
  </ThumbContainer>
);

export default UserThumb;

import {
  GET_PHONELOGS,
  GET_USERS,
} from '../actionTypes/phonelogs';
import { phonelogs, users } from '../mockedData';

export const getPhoneLogs = () => async dispatch => {
  const response = await setTimeout(() => {
    dispatch({ type: GET_PHONELOGS, payload: phonelogs });
  }, 2000);

  return response;
};

export const getUsersList = () => async dispatch => {
  console.log('users', users);
  const response = await setTimeout(() => {
    dispatch({ type: GET_USERS, payload: users });
  }, 2000);

  return response;
};

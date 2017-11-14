import {
  GET_PHONELOGS,
} from '../actionTypes/phonelogs';
import { phonelogs } from '../mockedData';

export const getPhoneLogs = () => async dispatch => {
  const response = await setTimeout(() => {
    dispatch({ type: GET_PHONELOGS, payload: phonelogs });
  }, 2000);

  return response;
};

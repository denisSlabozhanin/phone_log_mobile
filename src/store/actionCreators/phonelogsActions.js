import {
  GET_PHONELOGS,
  PENDING,
  FETCHING_DONE,
} from '../actionTypes/phonelogs';
import { phonelogs } from '../mockedData';

export const getPhoneLogs = () => async dispatch => {
  dispatch({ type: PENDING });

  const response = await setTimeout(() => {
    dispatch({ type: GET_PHONELOGS, payload: phonelogs });
  }, 1000);

  dispatch({ type: FETCHING_DONE });

  return response;
};

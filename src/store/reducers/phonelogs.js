import { combineReducers } from 'redux';
import {
  FETCHING_DONE,
  PENDING,
  GET_PHONELOGS,
} from '../actionTypes/phonelogs';

const phonelogsList = (state = [], action) => {
  switch (action.type) {
  case GET_PHONELOGS:
    return action.payload;
  default:
    return state;
  }
};

const isPendingPhoneLogs = (state = false, action) => {
  switch (action.type) {
  case PENDING:
    return true;
  case FETCHING_DONE:
    return false;
  default:
    return state;
  }
};

export default combineReducers({
  phonelogsList,
  isPendingPhoneLogs,
});

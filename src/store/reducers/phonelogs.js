import { combineReducers } from 'redux';
import {
  FETCHING_DONE,
  PENDING,
  GET_PHONELOGS,
  GET_USERS,
} from '../actionTypes/phonelogs';

const phonelogsList = (state = [], action) => {
  switch (action.type) {
  case GET_PHONELOGS:
    return action.payload;
  case 'persist/REHYDRATE': {
    return action.payload.phonelogs.phonelogsList;
  }
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

const usersList = (state = [], action) => {
  switch (action.type) {
  case GET_USERS:
    return action.payload;
  case 'persist/REHYDRATE': {
    if (action.payload.phonelogs.usersList) {
      return action.payload.phonelogs.usersList;
    }
    return state;
  }
  default:
    return state;
  }
};

export default combineReducers({
  usersList,
  phonelogsList,
  isPendingPhoneLogs,
});

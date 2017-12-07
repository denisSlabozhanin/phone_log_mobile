/* eslint-disable */

import { combineReducers } from 'redux';
import { listEditMode } from '../actionTypes/appTypes';

const isListEditMode = (state = false, action) => {
  switch (action.type) {
    case listEditMode.ON: {
      return true;
    }
    case listEditMode.OFF:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isListEditMode,
});

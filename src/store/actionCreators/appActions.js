import { listEditMode } from '../actionTypes/appTypes';

export const setEditMode = (value) => dispatch => {
  dispatch({ type: value ? listEditMode.ON : listEditMode.OFF });
};

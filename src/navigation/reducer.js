import Navigator from './Navigator';
import { INITIAL_ROUTE_NAME } from '../constants/path';

const initialState = Navigator.router.getStateForAction(
  Navigator.router.getActionForPathAndParams(INITIAL_ROUTE_NAME),
);

const navReducer = (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;

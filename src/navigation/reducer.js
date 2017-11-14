import Navigator from './Navigator';
import { INITIAL_ROUTE } from '../constants/routes';

const initialState = Navigator.router.getStateForAction(
  Navigator.router.getActionForPathAndParams(INITIAL_ROUTE),
);

const navReducer = (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;

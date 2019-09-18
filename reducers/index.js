import {combineReducers} from 'redux';

import navigationReducer from './navigationReducer';
import loginReducer from './loginReducer';

const reducers = combineReducers({
  navigationReducer,
  loginReducer,
});
export default reducers;

//recibe state y action
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
const states = {};

const loginReducer = (state = states, action) => {
  switch (action.type) {
    case 'LOADING': {
      return {...state, loading: true};
    }
    case 'ERROR': {
      return {...state, error: action.payload, loading: false};
    }
    case 'LOGEARSE': {
      return {...state, ...action.payload};
    }
    case 'SET_USER': {
      return {...state, ...action.payload};
    }
    case 'LOGOUT_USER': {
      return false;
    }
    case 'SET_PROPERTIES': {
      return {...state, ...action.payload};
    }
    case 'GET_USER': {
      return {...state, ...action.payload};
    }
    default:
      return {state};
  }
};
const persistConfig = {
  key: 'auth',
  storage,
};
export default persistReducer(persistConfig, loginReducer);

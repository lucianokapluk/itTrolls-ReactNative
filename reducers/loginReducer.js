//recibe state y action
const states = {token: ''};
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
    case 'GET_TOKEN': {
      return {...state};
    }
    default:
      return {state, ...action.payload};
  }
};
export default loginReducer;

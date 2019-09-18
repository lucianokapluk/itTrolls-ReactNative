import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducers/index';
//reducer,initialstate, enhanser
import reduxThunk from 'redux-thunk';

//store recibe reducers and initial state
const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

export default store;

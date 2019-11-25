import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducers/index';
import {persistStore, persistReducer} from 'redux-persist';
//reducer,initialstate, enhanser
import reduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

//store recibe reducers and initial state
//const store = createStore(reducer, {}, applyMiddleware(reduxThunk));
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export {store, persistor};

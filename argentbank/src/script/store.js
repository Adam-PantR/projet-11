import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; 
import loginReducer from './loginReducer';



const rootReducer = combineReducers({
  login: loginReducer,
});

const store = configureStore({
  reducer:rootReducer,
  middleware: [thunk]
});

export default store;
import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; 
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk] 
});

export default store;
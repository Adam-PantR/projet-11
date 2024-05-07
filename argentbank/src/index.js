import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer from './script/loginReducer';

// import 'font-awesome/css/font-awesome.min.css';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

reportWebVitals();
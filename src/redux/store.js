// store.js
import { configureStore } from '@reduxjs/toolkit';
import consultasReducer from '../redux/Consultaslice';

export const store = configureStore({
  reducer: {
    consultas: consultasReducer,
  },
});



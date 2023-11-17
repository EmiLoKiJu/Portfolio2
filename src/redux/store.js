import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popup/popupSlice';

const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});

export default store;

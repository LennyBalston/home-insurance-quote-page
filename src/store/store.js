import { configureStore } from "@reduxjs/toolkit";
import throttle from 'lodash.throttle';

import userQuoteReducer from './userQuoteSlice';
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    userQuote: userQuoteReducer
  },
  preloadedState
});

store.subscribe(throttle(() => {
  saveState({
    userQuote: store.getState().userQuote
  });
}, 1000));

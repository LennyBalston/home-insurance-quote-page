import { configureStore } from "@reduxjs/toolkit";

import userQuoteReducer from './userQuoteSlice';

export const store = configureStore({
  reducer: {
    userQuote: userQuoteReducer
  }
});

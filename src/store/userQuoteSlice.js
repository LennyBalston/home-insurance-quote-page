import { createSlice } from "@reduxjs/toolkit";

import { CONSTANT } from '../constants'

const initialState = {
  showMonthlyPrice: true,
  isPricesInitialized: false,
  monthlyPrice: 0,
  annualPrice: 0,
  isAddonsSelectedInitialized: false,
  addonsSelected: {},
}
const userQuoteSlice = createSlice({
  name: 'userQuote',
  initialState: initialState,
  reducers: {
    toggleShowMonthlyPrice: (state) => {
      state.showMonthlyPrice = !state.showMonthlyPrice;
    },
    updatePrice: (state, action) => {
      const { type, monthlyPrice, annualPrice } = action.payload;
      switch (type) {
        case CONSTANT.ACTION_TYPE_SET:
          if (!state.isPricesInitialized) {
            state.monthlyPrice = monthlyPrice;
            state.annualPrice = annualPrice;
            state.isPricesInitialized = true;
          }
          break;
        case CONSTANT.ACTION_TYPE_ADD:
          state.monthlyPrice = state.monthlyPrice + monthlyPrice;
          state.annualPrice = state.annualPrice + annualPrice;
          break;
        case CONSTANT.ACTION_TYPE_REMOVE:
          state.monthlyPrice = state.monthlyPrice - monthlyPrice;
          state.annualPrice = state.annualPrice - annualPrice;
          break;
        default:
          break;
      }
    },
    updateAddonsSelected: (state, action) => {
      const { type } = action.payload;
      switch (type) {
        case CONSTANT.ACTION_TYPE_SET:
          if (!state.isAddonsSelectedInitialized) {
            const addons = action.payload.addons
            for (let i = 0; i < addons.length; i++) {
              state.addonsSelected[i] = false;
            }
            state.isAddonsSelectedInitialized = true;
          }
          break;
        case CONSTANT.ACTION_TYPE_TOGGLE:
          const id = action.payload.id
          state.addonsSelected[id] = !state.addonsSelected[id]
          break;
        default:
          break;
      }
    }
  }
})
export const { toggleShowMonthlyPrice, updatePrice, updateAddonsSelected } = userQuoteSlice.actions;

export default userQuoteSlice.reducer;

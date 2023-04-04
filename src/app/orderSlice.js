import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    addtoOrder: (state, action) => {
      if (
        state.orders.findIndex((elem) => elem.id === action.payload.id) === -1
      ) {
        state.orders.push({ ...action.payload, orderedCount: 1 });
      } else {
        let ind = state.orders.findIndex(
          (elem) => elem.id === action.payload.id
        );
        state.orders[ind].orderedCount += 1;
      }
    },
    increment: (state, action) => {
      let ind = state.orders.findIndex((elem) => elem.id === action.payload);
      state.orders[ind].orderedCount += 1;
    },
    decrement: (state, action) => {
      let ind = state.orders.findIndex((elem) => elem.id === action.payload);
      if (state.orders[ind].orderedCount > 0) {
        state.orders[ind].orderedCount -= 1;
      }
      if (state.orders[ind].orderedCount === 0) {
        state.orders = state.orders.filter(
          (elem) => elem.id !== action.payload
        );
      }
    },
    deleteItem: (state, action) => {
      state.orders = state.orders.filter((elem) => elem.id !== action.payload);
    },
    deleteAll: (state) => {
      state.orders = [];
    },
  },
});

export const { addtoOrder, increment, decrement, deleteItem,deleteAll} =
  ordersSlice.actions;

export const orderedProducts = (state) => state.ordered.orders;

export default ordersSlice.reducer;

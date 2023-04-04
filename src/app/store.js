import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./productSlice";
import orderSliceReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    products: productSliceReducer,
    ordered: orderSliceReducer,
  },
});

export default store;

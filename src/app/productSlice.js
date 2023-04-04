import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "./fakeRequest";
import { categories } from "../products";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    allItems: [],
    categories: categories,
    status: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.allItems = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "resolved";
        state.allItems = action.payload;
      });
  },
});

// export const {} = productSlice.actions;

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async function () {
    const prods = await request;

    return prods;
  }
);

export const selectProducts = (state) => state.products.allItems;
export const selectCategory = (state) => state.products.categories;
export default productSlice.reducer;

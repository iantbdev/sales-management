import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
import { productList } from "./Data";

const productSlice = createSlice({
  name: "products",
  initialState: productList,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, clientName, productName, productPrice } = action.payload;
      const productToUpdate = state.find((product) => product.id == id);
      if (productToUpdate) {
        productToUpdate.clientName = clientName;
        productToUpdate.productName = productName;
        productToUpdate.productPrice = productPrice;
      }
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.find((products) => products.id === id);
      if (existingProduct) {
        return state.filter((products) => products.id !== id);
      }
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export default productSlice.reducer;

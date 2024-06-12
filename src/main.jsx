import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./store/reducers/productReducer.jsx";
import userReducer from "./store/reducers/userReducer.jsx";

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

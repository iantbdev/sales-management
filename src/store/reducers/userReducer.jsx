import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem(
        "users",
        JSON.stringify({ isAuthenticated: true, user: action.payload })
      );
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("users");
    },
    loadUserFromStorage(state) {
      const storedUser = JASON.parse(localStorage.getItem("users"));
      if (storedUser) {
        state.isAuthenticated = storedUser.isAuthenticated;
        state.user = storedUser.user;
      }
    },
  },
});

export const { login, logout, loadUserFromStorage } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, userDetails, updateBookInMyBooks, updateMyAlbums } from "../server/authServer";

const userFromStorage = JSON.parse(localStorage.getItem("userToken")) || {};
const isLogin = Boolean(localStorage.getItem("userToken"));

const initialState = {
  appUser: userFromStorage,
  loading: false,
  error: null,
  isLogin: isLogin,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.loading = false;
      state.appUser = null;
      state.isLogin = false;
      // Clear user from localStorage
      localStorage.removeItem("userToken");
    }
  },
  extraReducers: (builder) => {
    builder
      // Handle applogin
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.appUser = action.payload;
        state.isLogin = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // Handle appsignup
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.appUser = action.payload;
        state.isLogin = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // Handle user details
      .addCase(userDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.appUser = action.payload;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // Handle update MyBooks
      .addCase(updateBookInMyBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBookInMyBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.appUser = action.payload;
      })
      .addCase(updateBookInMyBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // Handle update MyAlbums
      .addCase(updateMyAlbums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMyAlbums.fulfilled, (state, action) => {
        state.loading = false;
        state.appUser = action.payload;
      })
      .addCase(updateMyAlbums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
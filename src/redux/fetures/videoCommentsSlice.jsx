import { createSlice } from "@reduxjs/toolkit";
import { fetchVideoComments } from "../server/server";

const initialState = {
  allComments: [],
  loading: false,
  error: null,
};

const videoComments = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideoComments.fulfilled, (state, action) => {
        state.loading = false;
        state.allComments = [action?.payload];
      })
      .addCase(fetchVideoComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default videoComments.reducer;

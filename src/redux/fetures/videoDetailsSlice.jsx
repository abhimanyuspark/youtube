import { createSlice } from "@reduxjs/toolkit";
import { fetchVideoDetails } from "../server/server";

const initialState = {
  alldetails: [],
  loading: false,
  error: null,
};

const VideoDetails = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideoDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.alldetails = action.payload;
      })
      .addCase(fetchVideoDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default VideoDetails.reducer;

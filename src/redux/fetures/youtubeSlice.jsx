import { createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "../server/server";

const initialState = {
  videos: [],
  loading: false,
  error: null,
};

const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload?.contents;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default youtubeSlice.reducer;

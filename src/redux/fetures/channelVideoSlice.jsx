import { createSlice } from "@reduxjs/toolkit";
import { fetchChannelVideo } from "../server/server";

const initialState = {
  channelVideos: [],
  loading: false,
  error: null,
};

const AllchannelVideos = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelVideo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChannelVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.channelVideos = [action?.payload];
      })
      .addCase(fetchChannelVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default AllchannelVideos.reducer;

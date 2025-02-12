import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "../fetures/youtubeSlice";
import videoDetails from "../fetures/videoDetailsSlice";
import authReducers from "../fetures/authSlice";
import videoComments from "../fetures/videoCommentsSlice";
import AllchannelVideos from "../fetures/channelVideoSlice";


export const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
    details: videoDetails,
    auth: authReducers,
    allcomments: videoComments,
    ChannelVideos: AllchannelVideos,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

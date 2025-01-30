import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "../fetures/youtubeSlice";
import VideoDetails from '../fetures/videoDetailsSlice'

export const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
  details : VideoDetails
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

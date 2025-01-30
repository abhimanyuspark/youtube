import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "../fetures/youtubeSlice";
import videoDetails from "../fetures/videoDetailsSlice";
import authReducers from "../fetures/authSlice";

export const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
    details: videoDetails,
    auth: authReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

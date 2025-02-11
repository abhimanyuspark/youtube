import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "../fetures/youtubeSlice";
import videoDetails from "../fetures/videoDetailsSlice";
import authReducers from "../fetures/authSlice";
import videoComments from "../fetures/videoCommentsSlice";


export const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
    details: videoDetails,
    auth: authReducers,
    allcomments: videoComments,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "../fetures/youtubeSlice";

export const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

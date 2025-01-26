import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "x-rapidapi-key": "9518c0c30emshf8395a1ea254dd2p16ba40jsn69f8e6378759",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchVideos = createAsyncThunk(
  "youtube/fetchVideos",
  async (url, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/?q=${url}` ,options);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

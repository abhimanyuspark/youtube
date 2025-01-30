import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
// const apiKey = "6977a24db8msha68a6a2adc38fc6p12d6f9jsnb57ccb5fa9f4"
const apiKey = "ce41d978abmsh82fbaac007ae589p1ec88cjsnf89c9f75901d"

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchVideos = createAsyncThunk(
  "youtube/fetchVideos",
  async (url, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/?q=${url}`, options);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchVideoDetails = createAsyncThunk(
  "youtube/details",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/video/details/?id=${id}`,
        options
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const apiKey = "ce8c1c1e5bmshba57c22924d4bf2p114948jsn5979f8cc39cb"

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

export const fetchVideoComments = createAsyncThunk(
  "/video/comments/",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/video/comments/?id=${id}`,
        options
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchChannelVideo = createAsyncThunk(
  "/channel/videos/",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/channel/videos/?id=${id}`,
        options
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


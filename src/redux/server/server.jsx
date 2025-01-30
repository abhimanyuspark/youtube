import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "x-rapidapi-key": "ce41d978abmsh82fbaac007ae589p1ec88cjsnf89c9f75901d",
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

export const fetchVideoDetails = createAsyncThunk(
  'video/deatils',
  async(id,{rejectWithValue})=>{
    try{
      const response = await axios.get(`${BASE_URL}/video/details/?id=${id}`, options);
      return response.data;
    }catch (error){
      return rejectWithValue(error.response.data);
    }
  }
)
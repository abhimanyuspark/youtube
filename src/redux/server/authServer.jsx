import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authURL = "https://679a0a4f747b09cdcccd7708.mockapi.io/users"

export const signUp = createAsyncThunk(
  "auth/signupToBoth",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(authURL, data);
      const appUser = response.data; // Assuming the API returns user data

      if (appUser) {
        const obj = { id: appUser?.id, email: appUser?.email };
        localStorage.setItem("userToken", JSON.stringify(obj));

        return response.data;
      }
    } catch (error) {
      // Handle errors from either signup
      return rejectWithValue({ email: "Signup failed" });
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/loginToBoth",
  async (data, { rejectWithValue }) => {
    const { email, password } = data;
    try {
      const response = await axios.get(`${authURL}?email=${email}`);
      const user = response.data[0]; // Assuming you expect only one user

      if (!user) {
        return rejectWithValue({ email: "User not found" });
      }

      if (user.password === password) {
        const obj = { id: user?.id, email: user?.email };
        localStorage.setItem("userToken", JSON.stringify(obj));

        return response.data[0];
      } else {
        return rejectWithValue({ password: "Please enter valid credentials" });
      }
    } catch (error) {
      return rejectWithValue({
        email:
          "Error occurred while authenticating, If you are not user pls sign up",
      });
    }
  }
);

export const updateMyAlbums = createAsyncThunk(
  "updateMyAlbums",
  async ({ id, album, action }) => {
    try {
      // Step 1: Get the existing data
      const userResponse = await axios.get(`${authURL}/${id}`);
      const user = userResponse.data;

      // Step 2: Determine whether to add or delete
      let updatedAlbums;

      if (action === "add") {
        // Add the new album to the list
        updatedAlbums = [...(user?.playList || []), album];
      } else if (action === "delete") {
        // Remove the album by a unique key (e.g., title or id)
        updatedAlbums = user?.playList?.filter(
          (existingAlbum) => existingAlbum.title !== album.title
        );
      } else {
        throw new Error("Invalid action. Use 'add' or 'delete'.");
      }

      // Step 3: Update the user's data
      const res = await axios.put(`${authURL}/${id}`, {
        playList: updatedAlbums,
      });

      return res.data; // Return the updated albums
    } catch (error) {
      console.error(error);
      throw new Error(
        error.response?.data?.message || "Failed to update albums"
      );
    }
  }
);

export const userDetails = createAsyncThunk("userDetails", async (id) => {
  try {
    const response = await axios.get(`${authURL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateBookInMyBooks = createAsyncThunk(
  "myBooks/updateBook",
  async ({ id, book, action, title }) => {
    try {
      // Step 1: Fetch the existing data
      const { data: existingData } = await axios.get(`${authURL}/${id}`);

      // Step 2: Update the 'data' array of the specific object in 'myBooks'
      const updatedMyBooks = existingData.myBooks.map((item) => {
        // If the action is 'add', find the matching item and add the book
        if (action === "add" && item.title === title) {
          return { ...item, data: [...(item.data || []), book] };
        }

        // If the action is 'delete', find the matching item and remove the book by title
        if (
          action === "delete" &&
          item.data?.some((b) => b.title === book.title)
        ) {
          return {
            ...item,
            data: item.data.filter((b) => b.title !== book.title),
          };
        }

        // Return the unchanged item if no conditions are met
        return item;
      });

      // Step 3: Create the updated payload
      const updatedData = { ...existingData, myBooks: updatedMyBooks };

      // Step 4: Send the updated data back using PUT
      const response = await axios.put(`${authURL}/${id}`, updatedData);

      return response.data; // Return updated data
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to update myBooks"
      );
    }
  }
);

export const addChannelSubscribe = createAsyncThunk(
  "auth/addChannelSubscribe",
  async ({ id, channel, action }) => {
    try {
      // Step 1: Fetch the existing user data
      const { data: user } = await axios.get(`${authURL}/${id}`);

      // Step 2: Determine whether to add or delete the channel
      let updatedChannels;
      if (action === "add") {
        updatedChannels = [...(user?.subscribedChannels || []), channel];
      } else if (action === "delete") {
        updatedChannels = user?.subscribedChannels?.filter(
          (existingChannel) => existingChannel?.author?.channelId !== channel?.author?.channelId
        );
      } else {
        throw new Error("Invalid action. Use 'add' or 'delete'.");
      }

      // Step 3: Update the user's data with the new subscribed channels list
      const response = await axios.put(`${authURL}/${id}`, {
        subscribedChannels: updatedChannels,
      });

      return response.data; // Return the updated user data
    } catch (error) {
      console.error(error);
      throw new Error(
        error.response?.data?.message || "Failed to update subscribed channels"
      );
    }
  }
);

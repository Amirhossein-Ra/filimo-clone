import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlatform = createAsyncThunk("/Platform/fetch", async () => {
  const res = await axios.get("https://amirhossein-ra.github.io/Db/db.json");
  return res.data.Platforms;
});
const PlatformSlice = createSlice({
  name: "PlatformSlice",
  initialState: {
    Platforms: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlatform.fulfilled, (state, action) => {
      state.Platforms = action.payload;
    });
  },
});

export default PlatformSlice.reducer;

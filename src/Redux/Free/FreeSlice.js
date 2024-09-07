import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFree = createAsyncThunk("/Free/fetch", async () => {
  const res = await axios.get("https://amirhossein-ra.github.io/Db/db.json");
  return res.data.Free;
});
const FreeSlice = createSlice({
  name: "FreeSlice",
  initialState: {
    FreeMovies: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFree.fulfilled, (state, action) => {
      state.FreeMovies = action.payload;
    });
  },
});

export default FreeSlice.reducer;

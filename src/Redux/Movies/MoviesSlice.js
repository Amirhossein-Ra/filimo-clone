import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovie = createAsyncThunk("/Movies/fetch", async () => {
  const res = await axios.get(
    "https://661150b095fdb62f24eceae1.mockapi.io/Movies"
  );
  return res.data;
});
const MoviesSlice = createSlice({
  name: "MoviesSlice",
  initialState: {
    Movies: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.Movies = action.payload;
    });
  },
});

export default MoviesSlice.reducer;

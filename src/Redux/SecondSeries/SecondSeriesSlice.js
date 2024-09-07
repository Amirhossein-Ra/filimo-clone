import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSecondSeries = createAsyncThunk(
  "/SecondSeries/fetch",
  async () => {
    const res = await axios.get("https://amirhossein-ra.github.io/Db/db.json");
    return res.data.Series2;
  }
);
const SecondSeries = createSlice({
  name: "SecondSeries",
  initialState: {
    SecondSeries: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSecondSeries.fulfilled, (state, action) => {
      state.SecondSeries = action.payload;
    });
    builder.addCase(fetchSecondSeries.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default SecondSeries.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSeries = createAsyncThunk("/Series/fetch", async () => {
  const res = await axios.get("https://amirhossein-ra.github.io/Db/db.json");
  return res.data.Series;
});
const SeriesSlice = createSlice({
  name: "SeriesSlice",
  initialState: {
    Series: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSeries.fulfilled, (state, action) => {
      state.Series = action.payload;
    });
  },
});

export default SeriesSlice.reducer;

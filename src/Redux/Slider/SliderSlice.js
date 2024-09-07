import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSlide = createAsyncThunk("/Slider/fetch", async () => {
  const res = await axios.get(
    "https://661150b095fdb62f24eceae1.mockapi.io/Slider"
  );
  return res.data;
});
const SliderSlice = createSlice({
  name: "SliderSlice",
  initialState: {
    Slides: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSlide.fulfilled, (state, action) => {
      state.Slides = action.payload;
    });
  },
});

export default SliderSlice.reducer;

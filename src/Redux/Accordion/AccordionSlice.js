import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAccordion = createAsyncThunk("/Accordion/fetch", async () => {
  const res = await axios.get("https://amirhossein-ra.github.io/Db/db.json");
  return res.data.Accordion;
});
const AccordionSlice = createSlice({
  name: "AccordionSlice",
  initialState: {
    Accordions: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAccordion.fulfilled, (state, action) => {
      state.Accordions = action.payload;
    });
  },
});

export default AccordionSlice.reducer;

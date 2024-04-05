import { createSlice } from "@reduxjs/toolkit";


const reviewSlice = createSlice({
  name: "review",
  initialState: [],
  reducers: {
    addReview: (state, {payload}) => {
        state.push(payload);
      }
  },
});


export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;

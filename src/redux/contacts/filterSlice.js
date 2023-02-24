import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
  name: "filters",
  initialState: '',
  reducers: {
      setFilter(state, action) {
          console.log(state);
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
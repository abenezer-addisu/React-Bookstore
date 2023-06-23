import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlices = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      state, status: 'Under construction',
    }),
  },
});

export const { checkStatus } = categoriesSlices.actions;
export default categoriesSlices.reducer;

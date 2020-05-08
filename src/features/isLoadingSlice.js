import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: {
    value: false,
  },
  reducers: {
    on: (state) => {
      state.value = true;
    },
    off: (state) => {
      state.value = false;
    },
  },
});

export const { on, off } = isLoadingSlice.actions;

export const offAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(off());
  }, 2000);
};

export const selectIsLoading = (state) => state.isLoading.value;

export default isLoadingSlice.reducer;

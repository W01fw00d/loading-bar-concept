import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducer from "../features/isLoadingSlice";

export default configureStore({
  reducer: {
    isLoading: isLoadingReducer,
  },
});

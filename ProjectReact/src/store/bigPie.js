import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    themeSlice,
    authSlice,
  },
});

export default store;

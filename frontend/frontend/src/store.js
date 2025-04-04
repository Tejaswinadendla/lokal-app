import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice";
import bookmarksReducer from "./slices/bookmarksSlice"; // ✅ Import bookmarks slice

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    bookmarks: bookmarksReducer, // ✅ Include in store
  },
});

export default store;

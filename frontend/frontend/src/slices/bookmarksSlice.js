import { createSlice } from "@reduxjs/toolkit";

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      // ✅ Prevent duplicate bookmarks
      const exists = state.find((job) => job.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
  },
});

export const { addBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;

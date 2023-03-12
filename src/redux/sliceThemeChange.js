import {createSlice} from "@reduxjs/toolkit";
import {getLocalStorage} from "../utils/localStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isLight: getLocalStorage("theme"),
  },
  reducers: {
    themeChanger: (state, action) => {
      state.isLight = action.payload;
    },
  },
});

export const {themeChanger} = themeSlice.actions;
export default themeSlice.reducer;

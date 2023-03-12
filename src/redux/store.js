import {configureStore} from "@reduxjs/toolkit";
import favoriteSlice from "./sliceMain";
import themeSlice from "./sliceThemeChange";
import {setLocalStorage} from "../utils/localStorage";

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice,
    theme: themeSlice,
  },
});

store.subscribe(() => {
  setLocalStorage("store", store.getState().favorite.personInFavorite);
});

import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/localStorage";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    personInFavorite: getLocalStorage('store'),
  },
  reducers: {
    addPersonToFavorite: (state, actions) => {
      const findPerson = state.personInFavorite.find((item) => item.name === actions.payload.name);
      if (!findPerson) {
        state.personInFavorite.push(actions.payload);
      }
    },
    removePersonFromFavorite: (state, actions) => {
      state.personInFavorite = state.personInFavorite.filter(
        (item) => Number(item.id) !== Number(actions.payload),
      );
    },
  },
});

export const {addPersonToFavorite, removePersonFromFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;

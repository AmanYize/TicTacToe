import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./state/gameSlice";
export const store = configureStore({
  reducer: {
    game: gameSlice,
  },
});

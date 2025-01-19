import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    game: ["", "", "", "", "", "", "", "", ""],
    winner: "",
    startNewGame: false,
  },
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateGame: (state, action) => {
      if (action.payload.turn === "X") {
        state.value.game[action.payload.index] = "X"; // Corrected assignment
      }
      if (action.payload.turn === "O") {
        state.value.game[action.payload.index] = "O"; // Corrected assignment
      }
    },
    checkWin: (state) => {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Columns
        [0, 4, 8],
        [2, 4, 6], // Diagonals
      ];

      for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (
          state.value.game[a] &&
          state.value.game[a] === state.value.game[b] &&
          state.value.game[a] === state.value.game[c]
        ) {
          state.value.winner = state.value.game[a]; // Set winner
          break;
        }
      }
    },
    startNewGame: (state) => {
      state.value.game = ["", "", "", "", "", "", "", "", ""];
      state.value.winner = ""; // Reset winner as well
      state.value.startNewGame = true; // Optionally track if a new game is started
    },
  },
});

// Export the necessary actions
export const { updateGame, checkWin, startNewGame } = gameSlice.actions;

export default gameSlice.reducer;

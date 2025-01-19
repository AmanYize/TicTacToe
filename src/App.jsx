import { useState, useEffect } from "react";
import Header from "./components/Header";
import StartBtn from "./components/StartBtn";
import Btn from "./components/Btn";
import { useSelector, useDispatch } from "react-redux";
import { updateGame, checkWin, startNewGame } from "../state/gameSlice";

function App() {
  const game = useSelector((state) => state.game.value);
  const dispatch = useDispatch();
  const [turn, setTurn] = useState("X"); // Default to "X" for the first turn
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (game.winner) {
      setDisabled(true); // Disable all buttons if there's a winner
    }
  }, [game.winner]);

  function handleTurn(index) {
    if (game.game[index] === "") {
      dispatch(updateGame({ index, turn }));
      dispatch(checkWin()); // Dispatch the action to check for a win
      setTurn(turn === "X" ? "O" : "X"); // Toggle turn after the action
    }
  }

  function startNewGameT() {
    dispatch(startNewGame());
    setDisabled(false);
  }

  return (
    <div className="App h-screen bg-slate-900 text-white flex flex-col justify-center items-center">
      <Header />
      <StartBtn onClick={() => startNewGameT()} />

      {/* Display winner message */}
      {game.winner && (
        <div className="text-3xl font-bold mb-6">
          <span className="text-green-400">{game.winner}</span> is the winner!
        </div>
      )}

      {/* Tic-Tac-Toe grid */}
      <div className="grid grid-cols-3 gap-2 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] mt-8">
        {game.game.map((cell, index) => (
          <Btn
            key={index}
            text={cell}
            onClick={() => handleTurn(index)}
            disabled={cell !== "" || disabled} // Disable button if already clicked or if there's a winner
          />
        ))}
      </div>
    </div>
  );
}

export default App;

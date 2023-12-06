import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination.js";
import GameOver from "./components/GameOver";

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = temp(gameTurns);
  let winner = null;
  const [playerInfo, setplayerInfo] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const comb of WINNING_COMBINATIONS) {
    if (
      gameBoard[comb[0].row][comb[0].col] &&
      gameBoard[comb[0].row][comb[0].col] ===
        gameBoard[comb[1].row][comb[1].col] &&
      gameBoard[comb[1].row][comb[1].col] ===
        gameBoard[comb[2].row][comb[2].col]
    ) {
      winner = gameBoard[comb[0].row][comb[0].col];
    }
  }
  function temp(prevTurns) {
    let currentPlayer = "X";
    if (prevTurns.length > 0 && prevTurns[0].player == "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
  }

  function handleClick(rowIndex, colIndex) {
    // setActivePlayer(() => {return temp(gameTurns)});
    setGameTurns((prevTurns) => {
      let currentPlayer = temp(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  let hasDraw = gameTurns.length === 9 && !winner;

  function reStart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setplayerInfo(preInfo => {
      return {
        ...preInfo,
        [symbol]:newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intialName="player1"
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            intialName="player2"
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={playerInfo[winner]} reStart={reStart} />}
        <GameBoard playerSymbol={handleClick} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;

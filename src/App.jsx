import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination.js";
import GameOver from "./components/GameOver";

function App() {
  const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const PLAYER = {
    X: "Player 1",
    O: "Player 2",
  };
  const [gameTurns, setGameTurns] = useState([]);
  const [playerInfo, setplayerInfo] = useState(PLAYER);
  let activePlayer = derivedCurrentPlayer(gameTurns);
  let gameBoard = updateGameBoard();
  let winner = derivedWinner();
  let hasDraw = gameTurns.length === 9 && !winner;

  function updateGameBoard() {
    let board = [...INITIAL_GAME_BOARD.map((array) => [...array])];
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      board[row][col] = player;
    }
    return board;
  }

  function derivedWinner() {
    let winner = null;
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
    return winner;
  }

  function derivedCurrentPlayer(prevTurns) {
    let currentPlayer = "X";
    if (prevTurns.length > 0 && prevTurns[0].player == "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
  }

  function handleClick(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = derivedCurrentPlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function reStart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setplayerInfo((preInfo) => {
      return {
        ...preInfo,
        [symbol]: newName,
      };
    });
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
        {(winner || hasDraw) && (
          <GameOver winner={playerInfo[winner]} reStart={reStart} />
        )}
        <GameBoard playerSymbol={handleClick} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;

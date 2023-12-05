import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({playerSymbol, player}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectClick(rowIndex, colIndex){
        setGameBoard((prevBoard)=>{
            const updatedBoard = [...prevBoard.map(innerArray=> [...innerArray])];
            updatedBoard[rowIndex][colIndex] = player;
            return updatedBoard;
        })
        playerSymbol();
    }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> handleSelectClick(rowIndex, colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

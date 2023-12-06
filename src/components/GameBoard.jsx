
export default function GameBoard({ playerSymbol, board }) {
  
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectClick(rowIndex, colIndex){
  //     setGameBoard((prevBoard)=>{
  //         const updatedBoard = [...prevBoard.map(innerArray=> [...innerArray])];
  //         updatedBoard[rowIndex][colIndex] = player;
  //         return updatedBoard;
  //     })
  //     playerSymbol();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => playerSymbol(rowIndex, colIndex)}
                  disabled={col != null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

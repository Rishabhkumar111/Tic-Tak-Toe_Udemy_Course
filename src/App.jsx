import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleClick(){
    setActivePlayer((symbol)=> symbol==='X'?'O':'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialName="player1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player intialName="player2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard playerSymbol={handleClick} player={activePlayer}/>
      </div>
      Log
    </main>
  );
}

export default App;

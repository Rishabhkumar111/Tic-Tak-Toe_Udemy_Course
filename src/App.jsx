import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player intialName="player1" symbol="X"/>
          <Player intialName="player2" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
      Log
    </main>
  );
}

export default App;

import Player from "./components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player intialName="player1" symbol="X"/>
          <Player intialName="player2" symbol="O"/>
        </ol>
        game board
      </div>
      Log
    </main>
  );
}

export default App;

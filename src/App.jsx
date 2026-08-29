import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Maximilian" symbol="X"/>
          <Player initialName="Manuel" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  )
}

export default App

import { useState } from "react"; 

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer( (curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        {/** 순서 있는 목록이 필요한 이유: 플레이어1, 2.. 이기 때문문 */}
        <ol id='players' className="highlight-player">
          <Player initailName="Player-1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initailName="Player-2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>

      LOG
    </main>
  );
}

export default App

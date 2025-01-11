import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {

  const [gameTurns, setGameTurns] = useState([]);

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      // square는 객체 속의 객체
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns];

      return updatedTurns;

    });
  }

  return (
    <main>
      <div id="game-container">
        {/** 순서 있는 목록이 필요한 이유: 플레이어1, 2.. 이기 때문문 */}
        <ol id='players' className="highlight-player">
          <Player initailName="Player-1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initailName="Player-2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>

      <Log turns={gameTurns}/>
    </main>
  );
}

export default App

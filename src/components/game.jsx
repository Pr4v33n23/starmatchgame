import React , {useState} from 'react';
import StarMatch from './starMatch';

const Game = () => {
    const [gameId, setGameId] = useState(1);

    return <StarMatch 
    key = {gameId}
    startNewGame = {() => setGameId(gameId + 1)}
    />
}

export default Game;
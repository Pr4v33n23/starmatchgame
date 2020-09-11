import React from 'react';

const PlayAgain = (props) => {
    return (  <div className="game-done">
        <div className = "message" style={ { color: props.gameStatus === 'lost' ? '#e23e57': '#1fab89'}}>
            {props.gameStatus === 'lost' ? 'Game Over!': 'You Won!'}
        </div>
    <button onClick={props.onClick} className='btn btn-warning btn-sm' style = {{marginTop:'10px'}}>Play Again</button>
</div>);
}

export default PlayAgain;
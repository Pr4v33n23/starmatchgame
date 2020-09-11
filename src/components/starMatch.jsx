import React, { useEffect, useState } from 'react';
import { utils } from '../util/utils';
import PlayNumber from './playNumber';
import StarDisplay from './starDisplay';
import PlayAgain from './playAgain';

const StarMatch = (props) => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1,9));
  const [candidateNums, setCandidateNums]= useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);


  useEffect(() => {
    if(secondsLeft > 0 && availableNums.length > 0){
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft -1);
      }, 1000);
      return () => clearTimeout(timerId); 
    } 
  })


  const candidateAreWrong = utils.sum(candidateNums) > stars;

  const gameStatus = availableNums.length === 0? 'won': secondsLeft === 0 ? 'lost' : 'active';

 /*  const resetGame = () => {
    setStars(utils.random(1,9));
    setAvailableNums(utils.range(1,9))
    setCandidateNums([]);
  } */
  const numberStatus = (number) => {
    if(!availableNums.includes(number)){
      return 'used';
    }
    if(candidateNums.includes(number)){
      return candidateAreWrong ? 'wrong': 'candidate';
    }
    return 'available';
  }

  const onNumberClick = (number, currentStatus) => {
    if(gameStatus !== 'active' ||  currentStatus === 'used'){
      return;
    }

    const newCandidateNums = 
      currentStatus === 'available'?candidateNums.concat(number):candidateNums.filter(cn => cn !== number)
    
    candidateNums.concat(number);
    if(utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    }else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);

    }

  }

  return (
    <div className="game">
      <div className="lead">
        Pick 1 or more numbers that sum to the number of stars
        </div>
      <div className="body">
        <div className="left">
          {gameStatus !== 'active' ? (
            <PlayAgain onClick={props.startNewGame} gameStatus = {gameStatus}/>
          ) : ( <StarDisplay count={stars} />)}
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
          <PlayNumber
           key={number}
           number= {number}
           status = {numberStatus(number)}
           onClick = {onNumberClick}
           />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft} </div>
    </div>
  );
};

export default StarMatch;
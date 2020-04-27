import React, {useEffect} from 'react';
import useGame from '../utils/useGame';


function Game(props) {
  const { stop, finish} = props;
  const [cards, reshuffle, errors, finished] = useGame();

  useEffect(() => {
    if (finished){
        alert('You won!!! CONGRATULATIONS!!')
    } 
  }, [finished]);

  return (
    <main className={"game"}>
      <nav>
        
        <button onClick={reshuffle}>
          
          Reshuffle
        </button>
      </nav>
      <div className="deck fadein">
        {cards}
      </div>
      {/* <button onClick={() => finish(errors)}>Finish</button> */}
    </main>
  )
}

export default Game;
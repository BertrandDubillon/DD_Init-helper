import { Button } from "@mui/material";
import { useState } from "react";

const Turns = ({}) => {
  const [isStartPressed, setIsStartPressed] = useState(false);
    //Function to handle the next turn trigger
    const handleNextTurn = ()=>{
        setIsNextTurnTriggered(true);
      }
    
      //Function to reset the Turn Feature
      const resetTurns = () => {
        setTurnCounter(0);    
        setCharactersArray(
          charactersArray.map((char) => {
            return {
              ...char,
              isActive: false,
              hasPlayed: false,
            };
          })
        );
        setIsStartPressed(false);
        setIsNextTurnTriggered(false);
      };
      return(
  
    isStartPressed ? (
      <>
        <Button variant="contained" type="button" onClick={handleNextTurn}>
          Next
          {turnCounter}
        </Button>
        <Button variant="contained" type="button" onClick={() => resetTurns()}>
          Reset
        </Button>
      </>
    ) : (
      <Button
        variant="contained"
        type="button"
        onClick={() => {
          if (sortedCharactersArray.length > 0) {
            handleNextTurn();
            setIsStartPressed(true);
          }
        }}
      >
        Start Fight
      </Button>
    ))
      
};

export default Turns;

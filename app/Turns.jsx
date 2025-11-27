import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";

const Turns = ({handleNextTurn, resetTurns, isStartPressed, turnCounter, focusCharacter}) => {
   
  
    
      return(
  
    isStartPressed ? (
      <Stack gap={2}>
        <Button variant="contained" type="button" onClick={handleNextTurn}>
          Next
          {turnCounter}
        </Button>
        <Button variant="contained" type="button" onClick={resetTurns}>
          Reset
        </Button>
      </Stack>
    ) : (
      <Button
        variant="contained"
        type="button"
        onClick={handleNextTurn}
      >
        Start Fight
      </Button>
    ))
      
};

export default Turns;

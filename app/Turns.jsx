import { Height } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";

const Turns = ({handleNextTurn, resetTurns, isStartPressed, turnCounter, clearTable}) => {
   
  
    
      return(
  
    isStartPressed ? (
      <Stack direction="row" gap={2} justifyContent="center">
        <Box sx={{height : "50", width : "100", alignContent : 'center', p: 1, color:"white"}}>TURN {turnCounter}</Box>
        <Button variant="contained" color="secondary" type="button" sx={{width : "100"}} onClick={handleNextTurn}>
          Next          
        </Button>
        <Button variant="contained" color="secondary" type="button" onClick={resetTurns}>
          Stop
        </Button>
      </Stack>
    ) : (
      <Stack direction="row" gap={2} justifyContent="center">
      <Button
        variant="contained"
        type="button"
        color="secondary"
        onClick={handleNextTurn}
      >
        Start Fight
      </Button>
      <Button
      variant="contained"
      type="button"
      color="error"
      onClick={clearTable}
    >
      Clear Table
    </Button>
    </Stack>
      
    ))
      
};

export default Turns;

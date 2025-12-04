import { Box, Stack } from "@mui/material";
import AddNewChar from "./AddNewChar";
import EditSelectedChar from "./EditSelectedChar";
import Turns from "./Turns";

const LogicBar = ({characterToEdit, updateSelectedCharacter, addCharacter, isStartPressed, turnCounter, handleNextTurn, resetTurns, clearTable, addNewCharTrigger}) => {

    return (
        <Box flex={1} 
        sx={{position: "fixed", 
        top: 0,        
         }} >
            <Stack direction="column" gap={1}>
                <Box flex={2} sx={{bgcolor: 'primary.main', border:1, borderColor:'secondary.main'}}><AddNewChar addCharacter={addCharacter} addNewCharTrigger={addNewCharTrigger}/></Box>
                <Box flex={2} sx={{bgcolor: 'primary.main', border:1, borderColor:'secondary.main'}}><EditSelectedChar characterToEdit={characterToEdit}  updateSelectedCharacter={updateSelectedCharacter} addCharacter={addCharacter}/></Box>
                <Box flex={1} sx={{bgcolor: 'primary.main'}}><Turns isStartPressed={isStartPressed} turnCounter={turnCounter} handleNextTurn={handleNextTurn} resetTurns={resetTurns} clearTable={clearTable}></Turns></Box>
            </Stack>
        </Box>

    );
};

export default LogicBar;
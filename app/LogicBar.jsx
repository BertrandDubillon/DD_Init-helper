import { Box, Stack } from "@mui/material";
import AddNewChar from "./AddNewChar";
import EditSelectedChar from "./EditSelectedChar";
import Turns from "./Turns";

const LogicBar = ({characterToEdit, updateSelectedCharacter, addCharacter, isStartPressed, turnCounter, handleNextTurn, resetTurns}) => {

    return (
        <Box flex={7}>
            <Stack direction="column" gap={1}  >
                <Box flex={2} sx={{bgcolor: 'blue'}}><AddNewChar addCharacter={addCharacter}/></Box>
                <Box flex={2} sx={{bgcolor: 'blue'}}><EditSelectedChar characterToEdit={characterToEdit}  updateSelectedCharacter={updateSelectedCharacter} addCharacter={addCharacter}/></Box>
                <Box flex={1} sx={{bgcolor: 'blue'}}><Turns isStartPressed={isStartPressed} turnCounter={turnCounter} handleNextTurn={handleNextTurn} resetTurns={resetTurns}></Turns></Box>
            </Stack>
        </Box>

    );
};

export default LogicBar;
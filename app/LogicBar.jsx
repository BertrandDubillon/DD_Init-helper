import { Box, Stack } from "@mui/material";
import AddNewChar from "./AddNewChar";
import EditSelectedChar from "./EditSelectedChar";
import Turns from "./Turns";

const LogicBar = ({characterToEdit, updateSelectedCharacter, addCharacter, isStartPressed, turnCounter, handleNextTurn, resetTurns}) => {

    return (
        <Box flex={1} height='100vh' position="sticky" top='0px'>
            <Stack height ='100%' direction="column" gap={1}   >
                <AddNewChar addCharacter={addCharacter}/>
                <EditSelectedChar characterToEdit={characterToEdit}  updateSelectedCharacter={updateSelectedCharacter} addCharacter={addCharacter}/>
                <Turns isStartPressed={isStartPressed} turnCounter={turnCounter} handleNextTurn={handleNextTurn} resetTurns={resetTurns}/>
            </Stack>
        </Box>

    );
};

export default LogicBar;
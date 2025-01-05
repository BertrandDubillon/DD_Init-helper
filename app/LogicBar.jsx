import { Box, Stack } from "@mui/material";
import AddNewChar from "./AddNewChar";
import EditSelectedChar from "./EditSelectedChar";
import Turns from "./Turns";

const LogicBar = ({characterToEdit, updateSelectedCharacter, addCharacter, setIsStartPressed}) => {

    return (
        <Box flex={1} sx={{height:'100vh'}}  >
            <Stack direction="column" gap={1} sx={{height:'100%'}} >
                <Box flex={2} sx={{bgcolor: 'blue'}}><AddNewChar addCharacter={addCharacter}/></Box>
                <Box flex={2} sx={{bgcolor: 'blue'}}><EditSelectedChar characterToEdit={characterToEdit}  updateSelectedCharacter={updateSelectedCharacter} addCharacter={addCharacter}/></Box>
                <Box flex={1} sx={{bgcolor: 'blue'}}><Turns></Turns></Box>
            </Stack>
        </Box>

    );
};

export default LogicBar;
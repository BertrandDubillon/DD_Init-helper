import { Box, Stack } from "@mui/material";
import InitTable from "./InitTable";

const MainSection = ({ sortedCharactersArray,charactersArray, deleteCharacter, updateSelectedCharacter, selectedCharacter}) => {

    return (
        <Box flex={3}
        sx={{bgcolor:"pink"}}>
            <InitTable 
                charactersArray={charactersArray}
                sortedCharactersArray={sortedCharactersArray}
                deleteCharacter={deleteCharacter} 
                updateSelectedCharacter={updateSelectedCharacter} 
                selectedCharacter={selectedCharacter}              
                />
        </Box>

    );
};

export default MainSection;
import { Box, Stack } from "@mui/material";
import InitTable from "./InitTable";

const MainSection = ({ sortedCharactersArray,deleteCharacter, selectedCharacter}) => {

    return (
        <Box 
        sx={{bgcolor:"pink"}}
        flex={4}>
            <InitTable                 
                sortedCharactersArray={sortedCharactersArray}
                deleteCharacter={deleteCharacter}                 
                selectedCharacter={selectedCharacter}              
                />
        </Box>

    );
};

export default MainSection;
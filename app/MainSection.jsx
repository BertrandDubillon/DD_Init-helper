import { Box, Stack } from "@mui/material";
import InitTable from "./InitTable";

const MainSection = ({ sortedCharactersArray,charactersArray, deleteCharacter, updateSelectedCharacter, selectedCharacter}) => {

    return (
                <InitTable sx={{bgcolor:"pink", marginLeft:"418px" }}
                charactersArray={charactersArray}
                sortedCharactersArray={sortedCharactersArray}
                deleteCharacter={deleteCharacter} 
                updateSelectedCharacter={updateSelectedCharacter} 
                selectedCharacter={selectedCharacter}>              
                </InitTable>
        

    );
};

export default MainSection;
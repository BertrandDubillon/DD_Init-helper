import { Box, Stack } from "@mui/material";
import InitTable from "./InitTable";

const MainSection = ({ sortedCharactersArray,charactersArray, deleteCharacter, updateSelectedCharacter, selectedCharacter, focusRef}) => {

    return (
                <InitTable
                ref = {focusRef}                
                charactersArray={charactersArray}
                sortedCharactersArray={sortedCharactersArray}
                deleteCharacter={deleteCharacter} 
                updateSelectedCharacter={updateSelectedCharacter} 
                selectedCharacter={selectedCharacter}>              
                </InitTable>
        

    );
};

export default MainSection;
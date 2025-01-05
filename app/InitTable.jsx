import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteCharButton from "./DeleteCharButton";

// Table component
function InitTable({ sortedCharactersArray, deleteCharacter, updateSelectedCharacter, selectedCharacter }) {
        
    function rowBgColor(character) {
      if (character.hp <= 0) {
        return "red";
      }
      if (character.isActive === true) {
        return "green";
      }
      return "white";
    }
  
    return (
      <TableContainer sx={{ width: "max-content", margin: "auto", marginTop: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 200, textAlign: "center" }}>Name</TableCell>
              <TableCell sx={{ width: 100, textAlign: "right" }}>Init</TableCell>
              <TableCell sx={{ width: 100, textAlign: "right" }}>Hp</TableCell>
              <TableCell sx={{ width: 200, textAlign: "center" }}>X</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedCharactersArray.map((character) => {
              return (
                <TableRow
                  key={character.id}
                  onClick={() => {      
                    console.log('click');
                    console.log(character);
                                                        
                    selectedCharacter(character);                    
                  }}
                  bgcolor={rowBgColor(character)}
                >
                  <TableCell sx={{ textAlign: "center" }}>
                    {character.name}
                  </TableCell>
                  <TableCell sx={{ textAlign: "right" }}>
                    {character.init}
                  </TableCell>
                  <TableCell sx={{ textAlign: "right" }}>
                    {character.hp}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <DeleteCharButton
                        
                        deleteCharacter={deleteCharacter}
                        characterID={character.id}                        
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
export default InitTable;  
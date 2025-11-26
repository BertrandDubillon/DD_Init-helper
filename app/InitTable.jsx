import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteCharButton from "./DeleteCharButton";

function InitTable({ sortedCharactersArray, deleteCharacter, selectedCharacter }) {

  function rowBgColor(character) {
    if (character.hp <= 0) return "red";
    if (character.isActive) return "green";
    return "white";
  }

  return (
    <TableContainer sx={{ marginLeft: "418px", width: "calc(100% - 418px)", height : "100vh" }}>
      <Table stickyHeader sx={{ tableLayout : "fixed", width: "100%" }}>
        
        {/* HEADER */}
        <TableHead>
          <TableRow sx={{ width: "100%" }}>
            <TableCell sx={{ width: "30%", textAlign: "center" }}>Name</TableCell>
            <TableCell sx={{ width: "30%", textAlign: "center" }}>Init</TableCell>
            <TableCell sx={{ width: "30%", textAlign: "center" }}>Hp</TableCell>
            <TableCell sx={{ width: "10%", textAlign: "center" }}>X</TableCell>
          </TableRow>
        </TableHead>

        {/* BODY */}
        <TableBody>
          {sortedCharactersArray.map((character) => (
            <TableRow
              key={character.id}
              onClick={() => selectedCharacter(character)}
              sx={{
                width: "100%",
                bgcolor: rowBgColor(character),
                cursor: "pointer",
              }}
            >
              <TableCell sx={{ width: "30%", textAlign: "center" }}>
                {character.name}
              </TableCell>

              <TableCell sx={{ width: "30%", textAlign: "center" }}>
                {character.init}
              </TableCell>

              <TableCell sx={{ width: "30%", textAlign: "center" }}>
                {character.hp}
              </TableCell>

              <TableCell sx={{ width: "10%", textAlign: "center" }}>
                <DeleteCharButton
                  deleteCharacter={deleteCharacter}
                  characterID={character.id}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default InitTable;

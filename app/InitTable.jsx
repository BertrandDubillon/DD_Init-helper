import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteCharButton from "./DeleteCharButton";
import { forwardRef, useRef, useImperativeHandle } from "react";

const InitTable = forwardRef(function InitTable({ sortedCharactersArray, deleteCharacter, selectedCharacter }, ref) {
  // Ref object to store row IDs to focus on them when pressing next turn button
  const rowRefs = useRef({});

  // Focus on the current playing character
  useImperativeHandle(ref, () => ({
    scrollToRow(id) {
      const rowEl = rowRefs.current[id];
      if (!rowEl) return;
  
      // Find the scrollable container (TableContainer)
      const container = rowEl.closest(".MuiTableContainer-root");
      if (!container) return;
  
      const rowRect = rowEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
  
      // Scroll only if the row is outside the visible area
      if (rowRect.top < containerRect.top || rowRect.bottom > containerRect.bottom) {
        rowEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
      // Delete a ref from the table when deleting a character from the table
  
      clear(id) {        
        delete rowRefs.current[id];
      },

      // Clears the ref object when resetting the table
      clearAllRefs() {
        rowRefs.current = {};
      }
  }));



  // Colors the background of rows according to some rules.
  function rowBgColor(character) {
    if (character.hp <= 0) return "error.main";
    if (character.isActive) return "secondary.main";
    return "primary.main";
  }

  return (
    <TableContainer sx={{ marginLeft: "420px", width: "calc(100% - 420px)", height : "100vh", backgroundColor: 'primary.main', }}>
      <Table stickyHeader sx={{ tableLayout : "fixed", width: "100%", backgroundColor: 'secondary.main',   }}>
        
        {/* HEADER */}
        <TableHead sx={{border:"5px solid", borderColor:"tertiary.main",}} >
          <TableRow sx={{ width: "100%", backgroundColor: 'primary.main', }}>
            <TableCell sx={{ width: "30%", textAlign: "center", backgroundColor: 'secondary.main', color:"white", fontSize:"1rem", border: '1px solid', borderRight:"none",
            borderColor: 'tertiary.main'  }}>NAME</TableCell>
            <TableCell sx={{ width: "27,5%", textAlign: "center", backgroundColor: 'secondary.main', color:"white", fontSize:"1rem", border: '1px solid', borderRight:"none",
            borderColor: 'tertiary.main' }}>INIT</TableCell>
            <TableCell sx={{ width: "27,5%", textAlign: "center", backgroundColor: 'secondary.main', color:"white", fontSize:"1rem", border: '1px solid', borderRight:"none",
            borderColor: 'tertiary.main' }}>HP</TableCell>
            <TableCell sx={{ width: "15%", textAlign: "center", backgroundColor: 'secondary.main', color:"white", fontSize:"1rem", border: '1px solid',
            borderColor: 'tertiary.main' }}>X</TableCell>
          </TableRow>
        </TableHead>

        {/* BODY */}
        <TableBody>
          {sortedCharactersArray.map((character) => (
            <TableRow
              key={character.id}
              ref={(el) => (rowRefs.current[character.id] = el)}
              onClick={() => selectedCharacter(character)}
              sx={{
                width: "100%",
                bgcolor: rowBgColor(character),
                cursor: "pointer",
                '& .MuiTableCell-root': {
      borderBottom: '1px solid',
      borderColor: 'tertiary.main'},
              }}
            >
              <TableCell sx={{ width: "30%", textAlign: "center", color:"white", }}>
                {character.name}
              </TableCell>

              <TableCell sx={{ width: "30%", textAlign: "center", color:"white" }}>
                {character.init}
              </TableCell>

              <TableCell sx={{ width: "30%", textAlign: "center", color:"white" }}>
                {character.hp}
              </TableCell>

              <TableCell sx={{ width: "10%", textAlign: "center", color:"white" }}>
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
})

export default InitTable;

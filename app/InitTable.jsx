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
  }));

  // Colors the background of rows according to some rules.
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
            <TableCell sx={{ width: "27,5%", textAlign: "center" }}>Init</TableCell>
            <TableCell sx={{ width: "27,5%", textAlign: "center" }}>Hp</TableCell>
            <TableCell sx={{ width: "15%", textAlign: "center" }}>X</TableCell>
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
})

export default InitTable;

import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

//Component to Edit a character
function EditSelectedChar({ characterToEdit, updateSelectedCharacter }) {
  const [editHP, setEditHp] = useState(characterToEdit.hp);
  const [editInit, setEditInit] = useState(characterToEdit.init);

  useEffect(() => {
    setEditHp(characterToEdit.hp);
    setEditInit(characterToEdit.init);
  }, [characterToEdit]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",        
        border: 1,
        p: 2,
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
        onSubmit={(e) => {
          e.preventDefault();
          const editedChar = {
            id: characterToEdit.id,
            name: characterToEdit.name,
            init: editInit,
            hp: editHP,
          };
          if (
            editedChar.init !== characterToEdit.init ||
            editedChar.hp !== characterToEdit.hp
          ) {
            updateSelectedCharacter(editedChar);
          }
        }}
      >
        <Typography sx={{ textAlign: "center" }}>Current Character</Typography>
        <Box>
          <Typography sx={{ textAlign: "center" }}>
            {characterToEdit.name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box p={2} width={100}>
            Init
          </Box>
          <TextField
            id="init"
            value={editInit}
            type="number"
            onChange={(e) => {
              // regex to removes leading zeros
              setEditInit(e.target.value.replace(/^0+/, ""));
            }}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box p={2} width={100}>
            Hp
          </Box>
          <TextField
            id="hp"
            type="number"
            value={editHP}
            onChange={(e) => {
              setEditHp(e.target.value);
            }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={{ marginTop: 1 }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Save Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
}
export default EditSelectedChar;
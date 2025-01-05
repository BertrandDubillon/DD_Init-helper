import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

// Component to delete a character from the list, asking for confirmation
function DeleteCharButton({ deleteCharacter, characterID }) {
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const handleClick = () => {
    setIsDeleteClicked(true);
  };
  return isDeleteClicked ? (
    <Box>
      <IconButton onClick={() => deleteCharacter(characterID)}>
        <DoneIcon />
      </IconButton>
      <IconButton onClick={() => {setIsDeleteClicked(false)
      
      }}>
        <CloseIcon />
      </IconButton>
    </Box>
  ) : (
    <IconButton aria-label="delete" onClick={handleClick}>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteCharButton;
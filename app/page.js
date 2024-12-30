"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  IconButton,
  TableContainer,
  Typography,  
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { flexbox, positions, textAlign } from "@mui/system";
import { useState } from "react";
import { Edu_VIC_WA_NT_Beginner } from "next/font/google";
import { WrapText } from "@mui/icons-material";

/*TODO 
Remove floating numbers from number inputs
Editing characters
Styling the table
Improving the delete character button (style, hover)
If the HP of a character is 0, make the line red or crossed
Add a fixed ammount of Init next to the roll to account for bonuses, then show the sum
Add a cool Icon for the tab :)

Turn feature
  - Have a start button to have a turn counter set to 1 and highlight the first player to play
  - Then have a Next and Reset button show up in place of Start
  - Next button higlights the next character if not dead
  - Next button should loop from the last character to play to the first one and increment the turn counter
  - Reset will reset the counter, the highlights and show the Start button again
  - Make the Reset button need a confirmation to reset

Saving progress
  - Save the character list and the number of turns and current player locally

*/



// Component to delete a character from the list, asking for confirmation
function DeleteCharButton({deleteCharacter, characterID, charactersArray}) {
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const handleClick = () => {
    setIsDeleteClicked(true);
  };
  return (
    isDeleteClicked ?
    <Box >
    <IconButton onClick ={()=>deleteCharacter(characterID, charactersArray)}><DoneIcon/></IconButton>
    <IconButton onClick={()=>setIsDeleteClicked(false)}><CloseIcon/></IconButton>
    </Box>
    :
    <IconButton aria-label="delete" onClick={handleClick}> 
    <DeleteIcon/>  
    </IconButton>
    
  );
};

// Table component
function InitTable({ charactersArray, deleteCharacter }) {
  
  // Sorting from highest to lowest Initiative
  const sortedCharactersArray = charactersArray.sort((a, b) => b.init - a.init);

  return (
    <TableContainer sx={{width : 'max-content', margin : 'auto', marginTop : 1}}>
    <Table> 
      <TableHead>
        <TableRow >
          <TableCell sx={{width : 200, textAlign:'center'}}>Name</TableCell>
          <TableCell sx={{width : 100, textAlign:'right'}}>Init</TableCell>
          <TableCell sx={{width : 100, textAlign:'right'}}>Hp</TableCell>
          <TableCell sx={{width : 200, textAlign:'center'}}>X</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedCharactersArray.map((character) => {
          return (
            <TableRow key={character.id} onClick={()=>{console.log('row');
            }}>
              <TableCell sx={{textAlign:'center'}}>{character.name}</TableCell>
              <TableCell sx={{textAlign:'right'}}>{character.init}</TableCell>
              <TableCell onClick={()=>{console.log('click');
              }} sx={{textAlign:'right'}}>{character.hp}</TableCell>
              <TableCell sx={{textAlign:'center'}}>
                {/* <Button                
                onClick={()=>{deleteCharacter(character.id, charactersArray)}}
                size="small"
                >X</Button> */}
                <DeleteCharButton 
                deleteCharacter={deleteCharacter} 
                characterID={character.id} 
                charactersArray={charactersArray}/>
                </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </TableContainer>
  );
}

// Component to add a new Character to the state
function AddNewChar({ addCharacter }) {

  const defaultName = '';
  const defaultInit = 0;
  const defaultHP = 0;

  const [name, setName] = useState(defaultName);
  const [init, setInit] = useState(defaultInit);
  const [hp, setHp] = useState(defaultHP);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: 450, marginLeft : 'auto', border : 1, p:2}}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // trim() removes white spaces before and after input. Used to check if name isnt blank
          if (name.trim() !== '' && init !== 0 && hp !== 0)
          addCharacter(name, init, hp);
        }}
      >
        <Box sx={{ display: "flex"}}>
          <Box padding={2} width={100}>
            Name
          </Box>
          <TextField
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box p={2} width={100}>
            Init
          </Box>
          <TextField
            id="init"
            value={init}
            type="number"            
            onChange={(e) => {
              // regex to removes leading zeros
              setInit(e.target.value.replace(/^0+/, ''));
            }}
          />
          <Button
            sx={{ alignSelf: "center", marginLeft : 'auto'}}
            variant="contained"
            color="primary"
            onClick={() => setInit(Math.trunc(Math.random() * 20) + 1)}
          >
            Roll
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box p={2} width={100}>
            Hp
          </Box>
          <TextField
            id="hp"
            type="number"
            value={hp}
            onChange={(e) => {
              setHp(e.target.value.replace(/^0+/, ''));
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap : 2, paddingTop : 1 }}>
        <Button variant="contained" color="primary"
        onClick={()=>{setName(defaultName); setHp(defaultHP); setInit(defaultInit);}}>
            Reset
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
}

function EditSelectedChar({selectedName, selectedInit, selectedHp}) {
  const [editHP, setEditHp] = useState(selectedHp);
  const [editInit, setEditInit] = useState(selectedInit);

  return(
  <Box 
  sx={{ display: "flex",
    flexDirection: "column",
    width: 300,    
    border : 1,
    p:2}}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // trim() removes white spaces before and after input. Used to check if name isnt blank
          if (name.trim() !== '' && init !== 0 && hp !== 0)
          addCharacter(name, init, hp);
        }}
      >
      <Typography>Current Character</Typography>
      <Box>
        <Typography>{selectedName}</Typography>      
      </Box>
      <Box sx={{ display: "flex" }}>
          <Box p={2} width={100}>
            Init
          </Box>
          <TextField
            id="init"
            value={selectedInit}
            type="number"            
            onChange={(e) => {
              // regex to removes leading zeros
              setEditInit(e.target.value.replace(/^0+/, ''));
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
            value={selectedHp}
            onChange={(e) => {
              setEditHp(e.target.value.replace(/^0+/, ''));
            }}
          />
        </Box>
        </form>
  </Box>
)
}



// APP

export default function Home() {

  //State
  const [charactersArray, setCharactersArray] = useState([]);
  //ID counter, used to make sure every character has a different key
  const [currentID, setCurentID] = useState(1);

  //Function to add a character to the list
  const addCharacter = (charName, charInit, charHp) => {
    const newCharacter = {
      id: currentID,
      name: charName,
      init: charInit,
      hp: charHp,
    };
    setCharactersArray([...charactersArray, newCharacter]);
    setCurentID(currentID + 1);
  };

  //Function to delete a character from the list.
  const deleteCharacter = (characterID, charactersArray) => {    
    const newCharacterArray = charactersArray.filter((char)=> {return char.id !== characterID});
    setCharactersArray(newCharacterArray);
  }

  return (
    <Container>
      <Box sx={{display : 'flex'}}>
      <EditSelectedChar></EditSelectedChar>
      <AddNewChar addCharacter={addCharacter} />
      </Box>
      <InitTable charactersArray={charactersArray} deleteCharacter={deleteCharacter} />
    </Container>
  );
}

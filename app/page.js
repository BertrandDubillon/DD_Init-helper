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
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

/*TODO 
Remove floating numbers from number inputs
Styling the table
Add a cool Icon for the tab :)
- If the character name is a number + letter, make the number increment
  ex : 1A will become 2A, then 3A if another one is added. To make it easier to generate 'packs'

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
function DeleteCharButton({ deleteCharacter, characterID, charactersArray }) {
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const handleClick = () => {
    setIsDeleteClicked(true);
  };
  return isDeleteClicked ? (
    <Box>
      <IconButton onClick={() => deleteCharacter(characterID, charactersArray)}>
        <DoneIcon />
      </IconButton>
      <IconButton onClick={() => setIsDeleteClicked(false)}>
        <CloseIcon />
      </IconButton>
    </Box>
  ) : (
    <IconButton aria-label="delete" onClick={handleClick}>
      <DeleteIcon />
    </IconButton>
  );
}

// Table component
function InitTable({ charactersArray, deleteCharacter, editChar }) {
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
          {charactersArray.map((character) => {
            return (
              <TableRow
                key={character.id}
                onClick={() => {
                  editChar(character);
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
                    charactersArray={charactersArray}
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

// Component to add a new Character to the state
function AddNewChar({ addCharacter }) {
  const defaultName = "";
  const defaultInit = 0;
  const defaultHP = 0;
  const defaultFixedInit = 0;
  const defaultTotalInit = 0;

  const [name, setName] = useState(defaultName);
  const [init, setInit] = useState(defaultInit);
  const [hp, setHp] = useState(defaultHP);
  const [fixedInit, setFixedInit] = useState(defaultFixedInit);
  const [totalInit, setTotalInit] = useState(defaultTotalInit);

  useEffect(() => setTotalInit(init * 1 + fixedInit * 1), [init, fixedInit]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 450,
        marginLeft: "auto",
        border: 1,
        p: 2,
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
        onSubmit={(e) => {
          e.preventDefault();
          // trim() removes white spaces before and after input. Used to check if name isnt blank
          if (name.trim() !== "" && totalInit !== 0 && hp !== 0)
            addCharacter(name, totalInit, hp);
        }}
      >
        <Box sx={{ display: "flex" }}>
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box p={2} width={100}>
            Init
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              label="Random"
              id="init"
              value={init}
              type="number"
              sx={{ width: 75 }}
              onChange={(e) => {
                // regex to removes leading zeros
                setInit(e.target.value.replace(/^0+/, ""));
              }}
            />
            <Typography sx={{ alignContent: "center" }}>+</Typography>
            <TextField
              label="Fixed"
              id="fixedInit"
              value={fixedInit}
              type="number"
              sx={{ width: 75 }}
              onChange={(e) => {
                // regex to removes leading zeros
                setFixedInit(e.target.value.replace(/^0+/, ""));
              }}
            />
            <Typography sx={{ alignContent: "center" }}>
              {" "}
              = {totalInit}{" "}
            </Typography>
          </Box>
          <Button
            sx={{ alignSelf: "center", marginLeft: "auto" }}
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
              setHp(e.target.value.replace(/^0+/, ""));
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            paddingTop: 1,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setName(defaultName);
              setHp(defaultHP);
              setInit(defaultInit);
              setFixedInit(defaultFixedInit);
            }}
          >
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
        width: 300,
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

// APP

export default function Home() {
  //State
  const [charactersArray, setCharactersArray] = useState([]);
  const [sortedCharactersArray, setSortedCharactersArray] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isStartPressed, setIsStartPressed] = useState(false);
  const [isNextTurnTriggered, setIsNextTurnTriggered] = useState(false);
   //ID counter, used to make sure every character has a different key
   const [currentID, setCurrentID] = useState(1);
   const [characterToEdit, setCharacterToEdit] = useState({
     name: "",
     init: 0,
     hp: 0,
   });

  // Sorting from highest to lowest Initiative
  useEffect(() => {
    setSortedCharactersArray(charactersArray.sort((a, b) => b.init - a.init));
  }, [charactersArray]);
 
  // Handles the next turn trigger
  useEffect(()=>{
    if (isNextTurnTriggered) {
      nextTurn(sortedCharactersArray);      
    };
  },[isNextTurnTriggered]);

  //Function to track fights
  const nextTurn = (sortedCharactersArray) => {
    //resetting the trigger
    setIsNextTurnTriggered(false);
    if (sortedCharactersArray.length > 0) {
      for (let index = 0; index < sortedCharactersArray.length; index++) {
        const element = sortedCharactersArray[index];        
        // If a character that has not played and has over 0 hp is found
        if (element.hasPlayed === false) {
          if (element.hp > 0) {
            //Display it in the edit window
            selectedCharacter(element);
            //Highlight his row and assign True to hasPlayed
            setCharactersArray(
              charactersArray.map((char) => {
                if (char.id === element.id) {
                  return {
                    ...char,
                    isActive: true,
                    hasPlayed: true,
                  };
                } else {
                  return {
                    ...char,
                    isActive: false,
                  };
                }
              })
            ); 
            // exit the turn           
            return;
          }
        }
      }
      // if no valid character is found, resets all of them
      //Checks if any character has more than 0 hp to continue
      const allDead = sortedCharactersArray.every((char)=>{ return char.hp<=0});

      //If there is at least one character alive
      if (!allDead){
        
      //resets the properties
      setCharactersArray(
        charactersArray.map((char) => {
          return {
            ...char,
            isActive: false,
            hasPlayed: false,
          };
        })
      );
      //increment the turn counter
      setTurnCounter(turnCounter + 1);
      //trigger the next turn
      setTimeout(() => {
        setIsNextTurnTriggered(true);
      }, 0);           
    }
    //if they're all dead, do not do anything    
  };
}

  //Function to add a character to the list
  const addCharacter = (charName, charInit, charHp) => {
    const newCharacter = {
      id: currentID,
      name: charName,
      init: charInit,
      hp: charHp,
      isActive: false,
      hasPlayed: false,
    };
    setCharactersArray([...charactersArray, newCharacter]);
    setCurrentID(currentID + 1);
  };

  //Function to delete a character from the list.
  const deleteCharacter = (characterID, charactersArray) => {
    const newCharacterArray = charactersArray.filter((char) => {
      return char.id !== characterID;
    });
    setCharactersArray(newCharacterArray);
  };

  //Function to get the selected character to display it in the edit window
  const selectedCharacter = (character) => {
    setCharacterToEdit(character);
  };

  //Function to update a character
  const updateSelectedCharacter = (updatedCharacter) => {
    const foundChar = charactersArray.find(
      (char) => char.id === updatedCharacter.id
    );

    setCharactersArray(
      charactersArray.map((char) => {
        if (char.id === foundChar.id) {
          return {
            ...char,
            hp: updatedCharacter.hp,
            init: updatedCharacter.init,
          };
        } else {
          return char;
        }
      })
    );
  };

  //Function to handle the next turn trigger
  const handleNextTurn = ()=>{
    setIsNextTurnTriggered(true);
  }

  //Function to reset the Turn Feature
  const resetTurns = () => {
    setTurnCounter(0);
    setCharIndex(0);
    setCharactersArray(
      charactersArray.map((char) => {
        return {
          ...char,
          isActive: false,
          hasPlayed: false,
        };
      })
    );
    setIsStartPressed(false);
    setIsNextTurnTriggered(false);
  };

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <EditSelectedChar
          characterToEdit={characterToEdit}
          updateSelectedCharacter={updateSelectedCharacter}
        ></EditSelectedChar>
        {isStartPressed ? (
          <>
            <Button
              variant="contained"
              type="button"
              onClick={handleNextTurn}
            >
              Next
              {turnCounter}
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={() => resetTurns()}
            >
              Reset
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            type="button"
            onClick={() => {
              if (sortedCharactersArray.length > 0) {
                handleNextTurn();
                setIsStartPressed(true);
              }
            }}
          >
            Start Fight
          </Button>
        )}

        <AddNewChar addCharacter={addCharacter} />
      </Box>
      <InitTable
        charactersArray={sortedCharactersArray}
        deleteCharacter={deleteCharacter}
        editChar={selectedCharacter}
      />
    </Container>
  );
}


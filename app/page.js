"use client";
import {
  Box,
  Container,  
  Button,  
} from "@mui/material";
import { useEffect, useState } from "react";
import InitTable from "./InitTable";
import AddNewChar from "./AddNewChar";
import EditSelectedChar from "./EditSelectedChar";

/*TODO 
Remove floating numbers from number inputs
Styling the table
Add a cool Icon for the tab :)
Make the table dragable, and focus on the higlighted row (current turn)

Saving progress
  - Save the character list and the number of turns and current player locally
*/

/*Bugs to fix or features to correct/improve
Make it so you can go higher than 10 when generating 1A names
If you add characters at the end of a turn but before the next one, they'll "play"
before the next turn. Need a new property to adress that, like 'justCreated' or smthg.
*/

// APP

export default function Home() {
  //State
  const [charactersArray, setCharactersArray] = useState([]);
  const [sortedCharactersArray, setSortedCharactersArray] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);  
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    charName = packNames(charName, charactersArray);
    
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
  
  //Function to check if a name exist under the form NumberLetter (1A) and increment
  // the number if it does.
  const packNames = (charName, charArray)=>{  
    //testing for a number followed by a letter  
    const regex = /^(\d+)([A-Z])$/;
    //checking if the name matches the regex
    const match = charName.match(regex);
    //if not, use the charName
    if (!match){
      return charName
    }

    //if it does, check if it exists in the array
    else {      
      const existsInArray = charArray.find((char)=>char.name === charName)
      //if it doesn't exist, use the charName
      if (!existsInArray){
        return charName
      }
      //if it does exist, find the highest number related to the letter    
      else{
        //destructuring the match array to get the number and letter in variables
       const [_, number, letter] = match;
        //looking for all names in the array with that letter
        const allLetterNames = charArray.filter((char)=>{
          const match = (char.name).match(regex);
          return (match && (match[2]===letter));
          
          
        })
       
        //get the highest number of that array
        let maxNumber = 1;
        allLetterNames.forEach(element => {
          const match = (element.name).match(regex);
          if(match){
            if (match[1] > maxNumber){
              maxNumber = match[1];
            }
          }
          
        }); 
        //returning the highest number+1 and letter       
        return `${(maxNumber*1)+1}${letter}`
      }
    }
  }

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

  //Home() return
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


const { Box, TextField, Typography, Button } = require("@mui/material");
const { useState, useEffect } = require("react");

// Component to add a new Character to the state
function AddNewChar({ addCharacter,charactersArray }) {
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
          marginLeft: "auto",
          border: 1,
          p: 1,
          width: '400px'
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
            <Box padding={1} paddingTop={2} paddingLeft={2}>
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
            <Box p={2} >
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
              sx={{ alignSelf: "center", marginLeft: "8px" }}
              variant="contained"
              color="primary"
              onClick={() => setInit(Math.trunc(Math.random() * 20) + 1)}
            >
              Roll
            </Button>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box p={2} >
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

  export default AddNewChar;
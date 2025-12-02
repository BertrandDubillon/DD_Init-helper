import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: { primary: { main: "#3c6382", // Your first color 
                        light: "", // Optional lighter shade 
                        dark: "", // Optional darker shade 
                        contrastText: "#fff", }, 
                        
            secondary: { main: "#0a3d62", // Your secondary color 
              light: "", // Optional lighter shade 
              dark: "", // Optional darker shade 
              contrastText: "#fff",},
              tertiary: { main: "#466f91", // Your secondary color 
                light: "", // Optional lighter shade 
                dark: "", // Optional darker shade 
                contrastText: "#fff",},
            success: { main: "#3c6382", // Your third color 
              light: "", // Optional lighter shade 
              dark: "", // Optional darker shade 
              contrastText: "#fff",}, 
            error: { main: "#812c2c", // Your fourth color 
              light: "", // Optional lighter shade 
              dark: "", // Optional darker shade 
              contrastText: "#fff",},
           },
           typography: {
            allVariants: {
            color: "#ffffff", // makes all text white by default
            },
            },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "0.75rem",   // ← make all buttons smaller
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: 'white', // text color
          },
        },
      },  
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: '#ffffff', // input text
            '& .MuiInputBase-input': {
              color: '#ffffff', // typed text
            },
            
          },
          notchedOutline: {
            borderColor: '#ffffff',
            "&.Mui-focused": {
      borderColor: '#6F7E8C',
    }, // default
          },
          notchedOutline: {
            borderColor: '#ffffff', // default
          },
          focused : {
            borderColor: '#ffffff',
            color: "red",
          }
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#ffffff', // label
            '&.Mui-focused': {
              color: '#ffffff',
            },
            '&.Mui-error': {
              color: '#f44336',
            },
          },
        },
      },
    },
  });
  

export default theme;

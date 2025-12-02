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
              tertiary: { main: "#82ccdd", // Your secondary color 
                light: "", // Optional lighter shade 
                dark: "", // Optional darker shade 
                contrastText: "#fff",},
            success: { main: "#3c6382", // Your third color 
              light: "", // Optional lighter shade 
              dark: "", // Optional darker shade 
              contrastText: "#fff",}, 
            error: { main: "#e55039", // Your fourth color 
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
    },
  });
  

export default theme;

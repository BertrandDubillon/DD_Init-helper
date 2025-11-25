import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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

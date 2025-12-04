import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#3c6382', contrastText: '#fff' },
    secondary: { main: '#0a3d62', contrastText: '#fff' },
    tertiary: { main: '#466f91', contrastText: '#fff' },
    success: { main: '#3c6382', contrastText: '#fff' },
    error: { main: '#812c2c', contrastText: '#fff' },
    background: { paper: '#0a3d62', default: '#0a3d62' },
    common: { white: '#ffffff' },
  },

  typography: {
    allVariants: {
      color: '#ffffff',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: { fontSize: '0.75rem' },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#ffffff',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
            borderRadius: theme.shape.borderRadius,
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.common.white,
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
          },

          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.error.main,
          },

          "& input:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 100px ${theme.palette.primary.main} inset`,
            WebkitTextFillColor: "#ffffff",
            caretColor: "#ffffff",
            borderRadius: theme.shape.borderRadius,
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.common.white,
          '&.Mui-focused': { color: theme.palette.common.white },
          '&.Mui-error': { color: theme.palette.error.main },
        }),
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: ({ theme }) => ({
          color: theme.palette.common.white,

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.main,
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.main,
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.main,
          },
        }),

        input: ({ theme }) => ({
          color: theme.palette.common.white,
          '&::placeholder': { color: theme.palette.common.white },
        }),

        paper: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.common.white,
        }),

        listbox: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.common.white,
        }),

        option: ({ theme }) => ({
          '&.Mui-focused': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
          },
          '&[aria-selected="true"]': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
          },
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
          },
        }),
      },
    },
  },
});

export default theme;
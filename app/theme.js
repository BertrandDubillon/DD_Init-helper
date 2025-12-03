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

    // ensure input text color is white
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#ffffff',
        },
      },
    },

    // OUTLINED INPUT: highly specific, handles default/hover/focus/error
    MuiOutlinedInput: {
      styleOverrides: {
        // root gets focus/hover rules (use function to access theme)
        root: ({ theme }) => ({
          color: theme.palette.common.white,
          // typed text inside the input
          '& .MuiInputBase-input': {
            color: theme.palette.common.white,
          },

          // default outline (use a single selector targeting notchedOutline)
          // note: '.MuiOutlinedInput-notchedOutline' is the runtime class on the fieldset
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.main,
            borderWidth: '1px',
          },

          // hover — higher specificity by repeating the selector
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.common.white,
          },

          // focused — MUI applies Mui-focused on the root element
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.main,
          },

          // error
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main,
          },

          // if you still see odd fallbacks, this makes the rule twice as specific
          '&& .MuiOutlinedInput-notchedOutline': {
            // noop duplicate to raise specificity if needed
          },
        }),

        // override the notchedOutline slot itself as well (important)
        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.secondary.main,
        }),
      },
    },

    // LABEL
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.common.white,
          '&.Mui-focused': { color: theme.palette.common.white },
          '&.Mui-error': { color: theme.palette.error.main },
        }),
      },
    },

    // AUTOCOMPLETE - explicitly style the input root and dropdown pieces
    MuiAutocomplete: {
      styleOverrides: {
        // this targets the wrapper around the input used by Autocomplete
        inputRoot: ({ theme }) => ({
          color: theme.palette.common.white,

          // these three ensure Autocomplete's wrapper honours our notchedOutline styles
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

        // actual input element (typed text / placeholder)
        input: ({ theme }) => ({
          color: theme.palette.common.white,
          '&::placeholder': { color: theme.palette.common.white },
        }),

        // dropdown paper / listbox colors
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
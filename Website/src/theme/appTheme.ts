import { createTheme } from '@mui/material/styles';
import { brandedTokens, brandedComponents } from './brandedTheme'; // or from an npm package.

const appTheme = createTheme({
  palette: {
    primary: { main: "", light: "", dark: "" },
    secondary: { main: "", light: "", dark: "" },
    error: { main: "", light: "", dark: "" },
    warning: { main: "", light: "", dark: "" },
    info: { main: "", light: "", dark: "" },
    success: { main: "", light: "", dark: "" },
    text: { primary: "", secondary: "", disabled: "" },
    background: { default: "", paper: "" },
    divider: "black",
    contrastThreshold: 3.5
  },
  components: {
    ...brandedComponents,
    MuiButton: {
      styleOverrides: {
        root: [
          // Use array syntax to preserve the branded theme styles.
          brandedComponents?.MuiButton?.styleOverrides?.root,
          {
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
        ],
      },
    },
  },
});

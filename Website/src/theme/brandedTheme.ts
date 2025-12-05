import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

export const brandedTokens: ThemeOptions = {
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: 'rgb(229, 229, 234)',
    },
    
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily:
      'var(--font-primary, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)',
  },
};

export const brandedComponents: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        minWidth: 'unset',
        textTransform: 'capitalize',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
};

const brandedTheme = createTheme({
  ...brandedTokens,
  components: brandedComponents,
});

export default brandedTheme;

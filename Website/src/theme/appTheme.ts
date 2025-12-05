
import { createTheme } from '@mui/material/styles';

export default function CreateTheme() {
  const appTheme = createTheme({
    palette: {
      primary: { main: "#142890", light: "#1F3FE0", dark: "#09123F", contrastText: "#ffffff" },
      secondary: { main: "#422F00", light: "#A37500", dark: "#1A1200", contrastText: "#ffffff" },
      error: { main: "#FF0000", light: "#FF5C5C", dark: "#A30000" },
      text: { primary: "#000000", secondary: "##797979", disabled: "#000000" },
      background: { default: "#FFF4DE", paper: "#FFD786" },
      divider: "#113478",
      contrastThreshold: 3.5
    },
    typography: {
      fontFamily: "",
      fontSize: 0,
      htmlFontSize: 0,
      fontWeightLight: 0,
      fontWeightRegular: 0,
      fontWeightMedium: 0,
      fontWeightBold: 0,
      h1: { },
      h2: { },
      h3: { },
      h4: { },
      h5: { },
      h6: { }
    },
    shape: {
      borderRadius: 0
    }
  });
  return(
    appTheme
  );
}

"use client";
import { createTheme } from "@mui/material/styles";

export const AppTheme = createTheme({
    palette: {
      primary: { main: "#142890", light: "#1F3FE0", dark: "#09123F", contrastText: "#ffffff" },
      secondary: { main: "#422F00", light: "#A37500", dark: "#1A1200", contrastText: "#ffffff" },
      error: { main: "#FF0000", light: "#FF5C5C", dark: "#A30000" },
      text: { primary: "#000000", secondary: "#ffffff" },
      background: { default: "#FFF4DE", paper: "#FFD786" },
      divider: "#113478",
      contrastThreshold: 3.5
    },
    typography: {
      fontFamily: "Arial, sans-serif",
      fontSize: 12,
      htmlFontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 78,
        fontWeighBold: 900
      },
      h2: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 48
      },
      h3: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 30,
        fontWeightMedium: 700,
      },
      h4: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 80,
      },
      h5: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 80
      },
      h6: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 80
      },
      subtitle1: {},
      subtitle2: {},
      body1: {
        fontFamily: "Arial, sans-serif",
        fontSize: 16,
        htmlFontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
      },
      body2: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 18
      },
      button: {
        fontSize: "12",
        textTransform: "none"
      },
      caption: {  },
      overline: {  }
    },
    shape: {
      borderRadius: 10
    }
});
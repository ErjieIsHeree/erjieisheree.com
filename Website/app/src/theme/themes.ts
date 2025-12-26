"use client";
import { createTheme } from "@mui/material/styles";

export const AppTheme = createTheme({
    palette: {
      primary: { main: "#142890", light: "#1F3FE0", dark: "#09123F", contrastText: "#ffffff" },
      secondary: { main: "#422F00", light: "#A37500", dark: "#1A1200", contrastText: "#ffffff" },
      error: { main: "#FF0000", light: "#FF5C5C", dark: "#A30000" },
      text: { primary: "#000000", secondary: "#000" },
      background: { default: "#FFF4DE", paper: "#FFD786" },
      divider: "#000000",
      contrastThreshold: 3.5
    },
    typography: {
      fontFamily: "Arial, sans-serif",
      fontSize: 12,
      htmlFontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 900,
      h1: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 78
      },
      h2: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 58
      },
      h3: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 38,
        fontWeightBold: 900
      },
      h4: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 32,
      },
      h5: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 26
      },
      h6: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 22
      },
      subtitle1: {
        fontFamily: "Arial, sans-serif",
        fontSize: 18,
        lineHeight: 1.8
      },
      subtitle2: {
        fontFamily: "Arial, sans-serif",
        fontSize: 16
      },
      body1: {
        fontFamily: "Arial, sans-serif",
        fontSize: "1.2em",
        lineHeight: "1.6em"
      },
      body2: {
        fontFamily: "Consolas, Arial, sans-serif",
        fontSize: 14,
        fontWeightBold: 900
      },
      button: {
        fontSize: 16,
        textTransform: "none"
      },
      caption: {
        fontSize: 14
      }
    },
    shape: {
      borderRadius: 10
    }
});
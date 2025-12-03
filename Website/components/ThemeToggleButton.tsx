"use client";

import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "../app/ThemeRegistry"; // Ajusta la ruta si tu archivo está en otro lugar

export default function ThemeToggleButton() {
  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}

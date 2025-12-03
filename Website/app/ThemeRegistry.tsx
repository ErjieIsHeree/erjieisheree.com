"use client";

import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState, createContext, useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function useColorMode() {
  return useContext(ColorModeContext);
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  // Detecta modo oscuro del sistema
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  // Inicialización "perezosa" para usar localStorage si existe, o modo del sistema
  const [mode, setMode] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("theme") as "light" | "dark" | null;
      if (savedMode) return savedMode;
    }
    return prefersDark ? "dark" : "light";
  });

  // Guarda la preferencia cuando cambia
  useMemo(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", mode);
    }
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode(prev => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

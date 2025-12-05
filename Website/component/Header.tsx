"use client";

import NextLink from "next/link";
import Image from "next/image";

import { Typography, AppBar, Toolbar, Box, Button } from "@mui/material";
import MuiLink from "@mui/material/Link";

import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "initial"
      }}
    >
      <Toolbar
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto"
        }}
      >
        <MuiLink
          component={NextLink}
          href="/" underline="none"
          color="inherit"
          sx={{
            textDecoration: "none",
            p: 0,
            m: 0
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 100, height: 50, position: "relative" }}>
              <Image src="/img/logo.png" alt="Website's Logo" fill />
            </Box>
            <Typography variant="h6" color="inherit" >
              erjieisheree.com
            </Typography>
          </Box>
        </MuiLink>
        <Button
          component={NextLink}
          href="https://github.com/ErjieIsHeree?tab=projects"
          sx={{
            p: 0,
            m: 0
          }}
        >
          Projects
        </Button>
      </Toolbar>
    </AppBar>
  );
}

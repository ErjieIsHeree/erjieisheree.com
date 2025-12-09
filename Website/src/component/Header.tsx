"use client";

import NextLink from "next/link";
import Image from "next/image";

import { Typography, AppBar, Toolbar, Box, Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "background.default",
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
        <Logo />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2
          }}
        >
          <ProjectsBtn />
          <MenuBtn />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function Logo() {
  return(
    <Box
      component={NextLink}
      href="/"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        borderColor: "#000",
        border: 2
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 50,
          position: "relative"
        }}>
        <Image src="/img/logo.png" alt="Website's Logo" fill />
      </Box>
      <Typography
        sx={{
          display: "inline"
        }}
        variant="h4"
        color="inherit"
      >
        erjieisheree.com
      </Typography>
    </Box>
  );
}

function ProjectsBtn() {
  return(
    <Box component="a" href="https://github.com/ErjieIsHeree?tab=projects">
      <Typography variant="h6" color="inherit" >
        Projects
      </Typography>
    </Box>
  );
}

function MenuBtn() {
  return(
    <Button variant="contained">
      <Typography variant="button">
        Menu
      </Typography>
    </Button>
  );
}

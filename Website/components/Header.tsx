"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Left side: Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <Image
              src="/img/others/temp-img.jpg"
              alt="Logo"
              width={35}
              height={35}
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="h6" color="inherit">
              erjieisheree.com
            </Typography>
          </Link>
        </Box>

        {/* Desktop buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button
            component="a"
            href="https://github.com/ErjieIsHeree?tab=projects"
            color="primary"
          >
            Projects
          </Button>

          <Button onClick={openMenu} color="primary">
            Menu
          </Button>
        </Box>

        {/* Mobile menu icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={openMenu}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Dropdown menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
          <MenuItem component="a" href="https://github.com/ErjieIsHeree?tab=projects" onClick={closeMenu}>
            Projects
          </MenuItem>
          <MenuItem onClick={closeMenu}>Menu</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
}

"use client";

import NextLink from "next/link";
import Image from "next/image";

import { Box } from "@mui/material";

type LogoProps = {
  logoHeight: number;
}

export default function Logo({ logoHeight }: LogoProps) {
  return(
    <Box
      component={NextLink}
      href="/"
      sx={{
        display: "inline-block",
        height: logoHeight,
        aspectRatio: "1 / 1",
        position: "relative",
      }}
    >
      <Image src="/img/logo.png" alt="Logo" fill style={{ objectFit: "contain" }}/>
    </Box>
  );
}
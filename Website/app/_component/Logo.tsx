import Image from "next/image";

import { Link } from "@mui/material";

type LogoProps = {
  logoHeight: number;
}

export default function Logo({ logoHeight }: LogoProps) {
  return(
    <Link
      href="/"
      sx={{
        display: "inline-block",
        height: logoHeight,
        aspectRatio: "1 / 1",
        position: "relative"
      }}
    >
      <Image title="8-bit sword" src="/img/new-logo.webp" alt="logo" fill style={{ objectFit: "contain" }}/>
    </Link>
  );
}
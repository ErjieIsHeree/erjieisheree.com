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
        position: "relative",
      }}
    >
      <Image src="/img/logo.png" alt="Logo" fill style={{ objectFit: "contain" }}/>
    </Link>
  );
}
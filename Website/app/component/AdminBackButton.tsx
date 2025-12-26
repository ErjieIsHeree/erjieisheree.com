"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button, Typography } from "@mui/material";

export default function BackButton() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const previousSegment = segments.length > 1
    ? `/${segments.slice(0, -1).join("/")}`
    : "/";

  return (
    <Button href={previousSegment} variant="contained" color="secondary">
      <Image
        src="/img/back-icon.svg"
        alt="back button icon"
        width={25}
        height={25}
      />
      <Typography
        variant="button"
        color="secondary.contrastText"
        sx={{ "&:hover": { color: "primary.contrastText" } }}
      >
        Back
      </Typography>
    </Button>
  );
}

import { Metadata } from "next";
import { Grid } from "@mui/material";

import BackButton from "@ui/AdminBackButton";

export const metadata: Metadata = {
  title: "Erjieisheree Place",
  description:
    "Hi! My name is Erjie and this is my website. I'm a junior developer aiming to be the cybersecurity guy. Here I'll post things about my professional and personal life, hope you enjoy my place!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return(
    <Grid container component="body" direction={"row"}
      height={"100vh"} width={"100%"}
      bgcolor={"background.default"}
    >
      <Grid size={12} p={5} px={8} height={"10vh"}>
        <BackButton />
      </Grid>
      {children}
    </Grid>
  );
}

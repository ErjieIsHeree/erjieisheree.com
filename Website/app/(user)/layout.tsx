import "../globals.css";

import { Metadata } from "next";
import { Grid } from "@mui/material";

import Header from "@ui/Header";
import Footer from "@ui/Footer";

export const metadata: Metadata = {
  title: "Erjieisheree Place",
  description:
    "Hi! My name is Erjie and this is my website. I'm a junior developer aiming to be the cybersecurity guy. Here I'll post things about my professional and personal life, hope you enjoy my place!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Grid
      container
      component="body"
      spacing={"3em"}
      sx={{
        bgcolor: "background.default",
        justifyContent: "center",
      }}
    >
      <Header />
      <Grid
        size={12}
        component="main"
        sx={{
          minHeight: "100vh",
          maxWidth: "100em",
          mx: 10,
          my: 5,
        }}
      >
        {children}
      </Grid>
      <Grid size={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

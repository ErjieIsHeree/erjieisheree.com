import "./globals.css";

import { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Box } from "@mui/material";

import { AppTheme } from "@theme/themes"
import Header from "@ui/Header";
import Footer from "@ui/Footer";

export const metadata: Metadata = {
  title: "Erjieisheree Place",
  description: "Hi! My name is Erjie and this is my website. I'm a junior developer aiming to be the cybersecurity guy. Here I'll post things about my professional and personal life, hope you enjoy my place!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={AppTheme}>
            <Header />
            <Box component="main" sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
              {children}
            </Box>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
import "./globals.css";

import { Metadata } from "next";
import Providers from "@ui/Providers";

export const metadata: Metadata = {
  title: "Erjieisheree Place",
  description:
    "Hi! My name is Erjie and this is my website. I'm a junior developer aiming to be the cybersecurity guy. Here I'll post things about my professional and personal life, hope you enjoy my place!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Providers>
        {children}
      </Providers>
    </html>
  );
}

import "./globals.css";

import { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

{/* FOOTER
<hr />
<footer>
  <div>
    <Link href="/">
    <div>
      <Image src="/img/others/temp-img.jpg" alt="This site logo" width={35} height={35} />
      <p>erjieisheree.com</p>
    </div>
  </Link>
  <p>Made by Erjie Xia</p>
  </div>
  <div>
    <a href="https://github.com/ErjieIsHeree">
      <Image src="/img/socials/github-logo.png" alt="Github logo" width={35} height={35} />
    </a>
    <a href="https://linkedin.com/in/erjie-xia-5b50b72a6">
      <Image src="/img/socials/linkedin-logo.png" alt="Linkedin logo" width={35} height={35} />
    </a>
    <a href="https://x.com/home">
      <Image src="/img/socials/x-logo.png" alt="X logo" width={35} height={35} />
    </a>
  </div>
  <div>
    <p>© 2025 Erjie Xia. Content licensed under
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"> CC BY-NC-SA 4.0 International</a>
    </p>
  </div>
</footer>
*/}
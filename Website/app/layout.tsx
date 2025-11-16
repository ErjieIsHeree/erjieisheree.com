import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erjieisheree Place",
  description: "Hi! My name is Erjie and this is my website. I'm a junior developer aiming to be the cybersecurity guy. Here I'll post things about my professional and personal life, hope you enjoy my place!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <header>
          <div>
            <Link href="/" >
              <Image src="/socials/x_logo.png" alt="This site logo" width={35} height={35} />
              <p>erjieisheree.com</p>
            </Link>
          </div>
          <div>
            <a href="https://github.com/ErjieIsHeree?tab=projects">
              <p>Projects</p>
            </a>
            <button> {/* Bajar un menu con las páginas disponibles */}
              <p>Menu</p>
            </button>
          </div>
        </header>

        <main>{children}</main>
        
        <footer>
          <div>
            <Link href="/">
            <div>
              <Image src="/socials/x_logo.png" alt="This site logo" width={35} height={35} />
              <p>erjieisheree.com</p>
            </div>
          </Link>
          <p>Made by Erjie Xia</p>
          </div>
          <div>
            <a href="https://github.com/ErjieIsHeree">
              <Image src="/socials/github_logo.png" alt="Github logo" width={35} height={35} />
            </a>
            <a href="https://linkedin.com/in/erjie-xia-5b50b72a6">
              <Image src="/socials/linkedin_logo.png" alt="Linkedin logo" width={35} height={35} />
            </a>
            <a href="https://x.com/home">
              <Image src="/socials/x_logo.png" alt="X logo" width={35} height={35} />
            </a>
          </div>
          <div>
            <p>© 2025 Erjie Xia. Content licensed under
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0 International</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

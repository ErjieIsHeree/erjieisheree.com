import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <header>
        <a href="index_link">
          <div>
            <img src="logotipo" alt="Website logo" />
            <p>erjieisheree.com</p>
          </div>
        </a>
        <div>
          <a href="">
            <p>Projects</p>
          </a>
          <button> {/* Bajar un menu con las páginas disponibles */}
            <p>Menu</p>
          </button>
        </div>
      </header>
      
      <body>{children}</body>

      <footer>
          <a href="index_link">
          <div>
            <img src="logotipo" alt="Website logo" />
            <p>erjieisheree.com</p>
          </div>
        </a>
        <p>Made by Erjie Xia</p>
        <a href="">
          <img src="" alt="" />
        </a>
      </footer>
    </html>
  );
}

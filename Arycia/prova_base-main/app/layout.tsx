import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
    <body className="bg-gray-100 font-sans">
        <header className="bg-blue-400 py-4">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white">App de Noticias</h1>
        </div>
        </header>
        <main>{children}</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

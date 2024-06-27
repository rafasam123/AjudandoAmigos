'use client';

import "./globals.css";
import { useContext } from 'react';
import AuthContext, { AuthProvider } from '../context/AuthContext';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html>
        <head>
          <title>App de Receitas</title>
        </head>
        <body className="bg-gray-100 font-sans">
          <header className="bg-blue-400 py-4">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white">App de Receitas</h1>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link className="text-white hover:underline" href="/">Home</Link>
                  </li>
                  <li>
                    <Link className="text-white hover:underline" href="/auth/login">Login</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="max-w-4xl mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-200 py-4">
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-center text-gray-600">Footer</p>
            </div>
          </footer>
        </body>
      </html>
    </AuthProvider>
  );
}
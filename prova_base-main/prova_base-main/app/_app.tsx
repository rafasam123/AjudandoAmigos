'use client';
import { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import RootLayout from './layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </AuthProvider>
  );
}

export default MyApp;
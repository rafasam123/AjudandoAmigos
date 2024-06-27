'use client';

import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Bem vindo ao Portal de Receitas</h1>
      {isAuthenticated ? (
        <Link className="text-blue-500 hover:underline" href="/recipes">Ver Receitas</Link>
      ) : (
        <Link className="text-blue-500 hover:underline" href="/auth/login">Login</Link>
      )}
    </div>
  );
}
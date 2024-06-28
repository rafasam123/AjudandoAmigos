import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Bem vindo ao Portal de Noticias</h1>
      <Link className="text-blue-500 hover:underline" href="/posts">Ver Posts</Link>
      <Link className="text-blue-500 hover:underline" href="/auth/login">Logar</Link>
    </div>
  );
}

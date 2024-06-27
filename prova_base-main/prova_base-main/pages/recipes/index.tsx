'use client';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../context/AuthContext';
import receitas from '../../recipes.json';
import Image from 'next/image';
import Link from 'next/link';
import "../../app/globals.css";


interface Receita {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

export default function Recipes() {
  const [recipeList, setRecipeList] = useState<Receita[]>([]);
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    } else {
      setRecipeList(receitas);
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Optional: You can render a loading spinner or some other placeholder here
  }

  return (
    <div className="container mx-auto p-4">
      <title>Receitas - App de Receitas</title>
      <Link className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out" href="/">
        &larr; Voltar para Menu
      </Link>
      <h1 className="flex flex-col items-center text-2xl font-bold mb-4">Lista de Receitas</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        {recipeList.map((receita) => (
          <li key={receita.id} className="border p-4 rounded-lg shadow-lg">
            <Link href={`/recipes/${receita.id}`}>
              <h2 className="text-xl font-semibold mb-2">{receita.name}</h2>
              <Image src={receita.image} alt={receita.name} width={200} height={150} className="rounded-lg" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
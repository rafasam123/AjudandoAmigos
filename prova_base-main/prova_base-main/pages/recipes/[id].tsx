import { useRouter } from 'next/router';
import Link from 'next/link';
import recipesData from '../../recipes.json';
import Image from 'next/image';
import "../../app/globals.css";

interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

export default function RecipePage() {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const recipe = recipesData.find((recipe: Recipe) => recipe.id === id);

  if (!recipe) {
    return <p>Receita não encontrada</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <title>Receita - {recipe.name}</title>
      <Link className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out" href="/recipes">
      &larr; Voltar para Receitas
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-center">{recipe.name}</h1>
      <div className="mb-8 shadow-lg rounded-lg overflow-hidden">
        <Image src={recipe.image} alt={recipe.name} width={800} height={500} layout="responsive" className="object-cover" />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredientes:</h2>
        <ul className="list-inside list-disc text-lg">
          {recipe.ingredients.map((ingredient: string, index: number) => (
            <li key={index} className="mb-2">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Instruções:</h2>
        <ol className="list-inside list-decimal text-lg">
          {recipe.instructions.map((step: string, index: number) => (
            <li key={index} className="mb-4">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

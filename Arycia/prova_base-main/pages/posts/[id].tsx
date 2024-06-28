import { useRouter } from 'next/router';
import Link from 'next/link';
import postsData from '../../recipes.json'; // Renomeie o arquivo para 'posts.json' se preferir
import Image from 'next/image';
import "../../app/globals.css";

interface Post {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const post = postsData.find((post: Post) => post.id === id);

  if (!post) {
    return <p>Post não encontrado</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <title>Post - {post.name}</title>
      <Link className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out" href="/posts">
        &larr; Voltar para Posts
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-center">dados sobre {post.name}</h1>
      <div className="mb-8 shadow-lg rounded-lg overflow-hidden">
        <Image src={post.image} alt={post.name} width={800} height={500} layout="responsive" className="object-cover" />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredientes:</h2>
        <ul className="list-inside list-disc text-lg">
          {post.ingredients.map((ingredient: string, index: number) => (
            <li key={index} className="mb-2">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Instruções:</h2>
        <ol className="list-inside list-decimal text-lg">
          {post.instructions.map((step: string, index: number) => (
            <li key={index} className="mb-4">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import posts from '../../recipes.json'; // Supondo que os dados ainda estejam no mesmo arquivo, mas você pode mudar o nome do arquivo para algo mais adequado, como 'posts.json'
import Image from 'next/image';
import Link from 'next/link';
import "../../app/globals.css";

interface Post {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

export default function Posts() {
  const [postList, setPostList] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    setPostList(posts);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <title>Posts - App de Receitas</title>
      <Link className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out" href="/">
        &larr; Voltar para Menu
      </Link>
      <h1 className="flex flex-col items-center text-2xl font-bold mb-4">Lista de Posts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        {postList.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg shadow-lg">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-semibold mb-2">Noticias sobre {post.name}</h2>
              <Image src={post.image} alt={post.name} width={200} height={150} className="rounded-lg" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

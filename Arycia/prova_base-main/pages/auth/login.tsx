import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import "../../app/globals.css";

type SignInData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<SignInData>();
  const router = useRouter();

  const handleLogin = (data: SignInData) => {
    if (data.username === 'admin') {
      console.log('Login bem-sucedido');
      router.push('/posts');
    } else {
      console.log('Nome de usuário ou senha incorretos');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleLogin)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Nome de usuário</label>
              <input
                {...register('username')}
                type="text"
                name="username"
                id="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nome de usuário"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <input
                {...register('password')}
                type="password"
                name="password"
                id="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out" href="/">
              &larr; Voltar para Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

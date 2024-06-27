'use client';

import { createContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = (username: string, password: string) => {
    console.log('Login attempt:', { username, password });
    alert(`Tentando logar com usuário: ${username} e senha: ${password}`);
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      alert('Login bem-sucedido!');
      router.push('/');
    } else {
      alert('Credenciais inválidas');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    router.push('/auth/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
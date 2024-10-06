'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importando os ícones

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('cliente'); // 'cliente' ou 'oficina'
  const [error, setError] = useState('');
  const router = useRouter();
  const [showSenha, setShowSenha] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'admin@example.com' && senha === 'admin123') {
      setError('');
      if (tipoUsuario === 'cliente') {
        router.push('/');
      }
    } else if (email === 'oficina@example.com' && senha === 'oficina123') {
      setError('');
      if (tipoUsuario === 'oficina') {
        router.push('/oficina'); // Redireciona para a página OficinaPage
      }
    } else {
      setError('E-mail ou senha inválidos');
    }
  };

  const handleShowSenha = () => {
    setShowSenha(!showSenha);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/S1000RR.jpg')" }}>
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-6 text-white">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-300 mb-2">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border-none rounded bg-gray-700 text-white"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="mb-6 relative">
          <label className="block text-sm font-bold text-gray-300 mb-2">Senha</label>
          <input
            type={showSenha ? 'text' : 'password'}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full px-3 py-2 border-none rounded bg-gray-700 text-white"
            placeholder="Digite sua senha"
          />
          <button
            type="button"
            onClick={handleShowSenha}
            className="absolute right-0 top-0 mt-2 mr-2 text-gray-300 hover:text-gray-500"
          >
            {showSenha ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-300 mb-2">Tipo de usuário</label>
          <select
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
            className="w-full px-3 py-2 border-none rounded bg-gray-700 text-white"
          >
            <option value="cliente">Cliente</option>
            <option value="oficina">Oficina</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Entrar
        </button>
        <div className="flex justify-between mt-4">
          <a href="/login/register" className="text-orange-300 underline">Cadastrar</a>
          <a href="/login/forgot-password" className="text-orange-300 underline">Esqueci a senha</a>
        </div>
      </form>
    </div>
  );
}

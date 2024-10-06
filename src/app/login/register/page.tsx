'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('cliente'); // 'cliente' ou 'oficina'
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && senha) {
      setError('');
      router.push('/'); // Redireciona para a página principal após o registro
    } else {
      setError('Preencha todos os campos');
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/S1000RR.jpg')" }}>
      <form onSubmit={handleRegister} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-6 text-white">Cadastrar</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-300 mb-2">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-300 mb-2">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
            placeholder="Digite sua senha"
          />
        </div>
        <div className="mb-6">
          <fieldset className="border border-gray-600 p-4 rounded">
            <legend className="text-gray-300 text-sm font-bold mb-2">Cadastrar como</legend>
            <div className="flex gap-4">
              <label className="radio-button flex items-center gap-2">
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="cliente"
                  checked={tipoUsuario === 'cliente'}
                  onChange={() => setTipoUsuario('cliente')}
                />
                <span className="text-gray-300">Cliente</span>
              </label>
              <label className="radio-button flex items-center gap-2">
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="oficina"
                  checked={tipoUsuario === 'oficina'}
                  onChange={() => setTipoUsuario('oficina')}
                />
                <span className="text-gray-300">Oficina</span>
              </label>
            </div>
          </fieldset>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Cadastrar
        </button>
        <div className="flex justify-center mt-4">
          <a href="/login" className="text-orange-300 hover: underline">Voltar ao Login</a>
        </div>
      </form>
    </div>
  );
}

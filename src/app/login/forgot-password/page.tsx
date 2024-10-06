'use client';  // Certifique-se de que este arquivo é um cliente

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simula o envio de um email para recuperação de senha
    if (email) {
      setMessage('Instruções de recuperação de senha enviadas para seu e-mail.');
      setTimeout(() => router.push('/login'), 2000); // Redireciona após 2 segundos
    } else {
      setMessage('Por favor, insira um e-mail válido.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/S1000RR.jpg')" }}>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-6 text-white">Esqueci a Senha</h2>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-300 mb-2">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
            placeholder="Digite seu e-mail"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Enviar
        </button>
        <div className="flex justify-between mt-4">
          <a href="/login/register" className="text-orange-300 hover: underline">Cadastrar</a>
          <a href="/login" className="text-orange-300 hover: underline">Voltar ao Login</a>
        </div>
      </form>
    </div>
  );
}

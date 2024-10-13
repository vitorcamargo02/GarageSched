'use client';

import React, { useState } from 'react';

interface Veiculo {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  foto: string;
  placa: string;
}

interface Historico {
  id: number;
  data: string;
  descricao: string;
  veiculo: string;
}

const ClientePage = () => {
  const [showHistorico, setShowHistorico] = useState(false);
  const [dias, setDias] = useState(5);
  const [veiculosData, setVeiculosData] = useState<Veiculo[]>([
    { id: 1, marca: 'Toyota', modelo: 'Corolla', ano: 2020, foto: 'https://picsum.photos/200/300', placa: 'ABC-1234' },
    { id: 2, marca: 'Ford', modelo: 'Focus', ano: 2018, foto: 'https://picsum.photos/200/301', placa: 'XYZ-5678' },
    { id: 3, marca: 'Honda', modelo: 'Civic', ano: 2022, foto: 'https://picsum.photos/200/302', placa: 'LMN-9101' },
  ]);

  const historicoData = [
    { id: 1, data: '2023-09-22', descricao: 'Troca de óleo e filtro de ar', veiculo: 'Toyota Corolla' },
    { id: 2, data: '2023-09-18', descricao: 'Revisão completa do sistema de freios', veiculo: 'Ford Focus' },
    { id: 3, data: '2023-09-10', descricao: 'Troca de pneus', veiculo: 'Honda Civic' },
  ];

  const handleShowHistorico = () => {
    setShowHistorico(!showHistorico);
  };

  const handleDiasChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDias(parseInt(event.target.value));
  };

  const handleExcluirVeiculo = (id: number) => {
    const novoVeiculosData = veiculosData.filter((veiculo) => veiculo.id !== id);
    setVeiculosData(novoVeiculosData);
  };

  const historicoFiltrado = historicoData.filter((item) => {
    const data = new Date(item.data);
    const agora = new Date();
    const diferenca = agora.getTime() - data.getTime();
    const diasDiferenca = diferenca / (1000 * 60 * 60 * 24);
    return diasDiferenca <= dias;
  });

  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-white">Bem-vindo à área do Cliente</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Veículos */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Veículos</h2>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Foto</th>
                  <th className="py-2">Marca</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Ano</th>
                  <th className="py-2">Placa</th>
                  <th className="py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {veiculosData.map((veiculo) => (
                  <tr key={veiculo.id}>
                    <td className="py-2">
                      <img src={veiculo.foto} alt={veiculo.marca} className="w-20 h-20 rounded-full" />
                    </td>
                    <td className="py-2">{veiculo.marca}</td>
                    <td className="py-2">{veiculo.modelo}</td>
                    <td className="py-2">{veiculo.ano}</td>
                    <td className="py-2">{veiculo.placa}</td>
                    <td className="py-2">
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleExcluirVeiculo(veiculo.id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Histórico */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Histórico</h2>
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleShowHistorico}
            >
              {showHistorico ? 'Esconder Histórico' : 'Mostrar Histórico'}
            </button>
            {showHistorico && (
              <div className="mt-4 bg-gray-100 p-4 rounded">
                <label className="block mb-2">Selecione o intervalo de dias:</label>
                <select
                  className="mb-4 p-2 border border-gray-300 rounded"
                  value={dias}
                  onChange={handleDiasChange}
                >
                  <option value={5}>Últimos 5 dias</option>
                  <option value={10}>Últimos 10 dias</option>
                  <option value={15}>Últimos 15 dias</option>
                  <option value={30}>Últimos 30 dias</option>
                  <option value={60}>Últimos 60 dias</option>
                  <option value={1000}>Todos</option>
                </select>

                <h3 className="text-xl font-semibold mb-4">Manutenções Realizadas</h3>
                <ul>
                  {historicoFiltrado.length > 0 ? (
                    historicoFiltrado.map((item) => (
                      <li key={item.id} className="mb-2">
                        <p>
                          <strong>Data:</strong> {item.data} <br />
                          <strong>Descrição:</strong> {item.descricao} <br />
                          <strong>Veículo:</strong> {item.veiculo}
                        </p>
                      </li>
                    ))
                  ) : (
                    <p>Nenhuma manutenção encontrada no intervalo selecionado.</p>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Buscar Oficinas */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Buscar Oficinas</h2>
            <form>
              <label className="block mb-2">Digite o nome da oficina:</label>
              <input
                type="text"
                className="mb-4 p-2 border border-gray-300 rounded"
                placeholder="Nome da oficina"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Buscar
              </button>
            </form>
          </div>

          {/* Informações sobre o cliente */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Informações sobre você</h2>
            <div className="flex items-center mb-4">
              <img src="https://picsum.photos/200/400" alt="Cliente" className="w-20 h-20 rounded-full mr-4" />
              <div>
                <h4 className="text-lg font-bold">Cliente XYZ</h4>
                <p>Endereço: Rua ABC, 123 - Centro</p>
                <p>CPF / CNPJ: 000.000.000.00</p>
                <button
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientePage;

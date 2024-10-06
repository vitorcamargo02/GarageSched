'use client';

import { useState } from 'react';
import MechanicForm from '../../components/mechanic/mechanic.form';
import Calendar from 'react-calendar'; // Certifique-se de instalar a biblioteca react-calendar
import 'react-calendar/dist/Calendar.css';

interface Historico {
  id: number;
  data: string;
  descricao: string;
  mecanico: string;
}

const OficinaPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showAgenda, setShowAgenda] = useState(false);
  const [mecanicos, setMecanicos] = useState([
    {
      id: 1,
      nome: 'João Silva',
      idade: 30,
      sexo: 'Masculino',
      curso: 'Mecânica',
      foto: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      idade: 25,
      sexo: 'Feminino',
      curso: 'Eletrônica',
      foto: 'https://picsum.photos/200/301',
    },
    {
      id: 3,
      nome: 'Pedro Santos',
      idade: 35,
      sexo: 'Masculino',
      curso: 'Mecânica',
      foto: 'https://picsum.photos/200/302',
    },
  ]);

  const [mecanico, setMecanico] = useState({
    nome: '',
    idade: 0,
    sexo: '',
    curso: '',
  });

  const [showHistorico, setShowHistorico] = useState(false);
  const [dias, setDias] = useState(5);

  const historicoData = [
    {
      id: 1,
      data: '2023-09-22',
      descricao: 'Troca de óleo e filtro de ar',
      mecanico: 'João Silva',
    },
    {
      id: 2,
      data: '2023-09-18',
      descricao: 'Revisão completa do sistema de freios',
      mecanico: 'Maria Oliveira',
    },
    {
      id: 3,
      data: '2023-09-10',
      descricao: 'Troca de pneus',
      mecanico: 'Pedro Santos',
    },
    {
      id: 4,
      data: '2023-09-05',
      descricao: 'Alinhamento e balanceamento',
      mecanico: 'João Silva',
    },
    {
      id: 5,
      data: '2023-08-30',
      descricao: 'Troca de correia dentada',
      mecanico: 'Maria Oliveira',
    },
    {
      id: 6,
      data: '2023-08-25',
      descricao: 'Substituição do alternador',
      mecanico: 'Pedro Santos',
    },
  ];

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleCadastrarMecanico = () => {
    setShowForm(true);
    setMecanico({
      nome: '',
      idade: 0,
      sexo: '',
      curso: '',
    });
  };

  const handleEditMecanico = (id: number) => {
    const mecanico = mecanicos.find((m) => m.id === id);
    if (mecanico) {
      setMecanico(mecanico);
      setShowForm(true);
    }
  };

  const handleShowHistorico = () => {
    setShowHistorico(!showHistorico);
  };

  const handleShowAgenda = () => {
    setShowAgenda(!showAgenda);
  };

  const handleDiasChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDias(parseInt(event.target.value));
  };

  const historicoFiltrado = historicoData.filter((item) => {
    const data = new Date(item.data);
    const agora = new Date();
    const diferenca = agora.getTime() - data.getTime();
    const diasDiferenca = diferenca / (1000 * 60 * 60 * 24);
    return diasDiferenca <= dias;
  });

  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/S1000RR.jpg')" }}>
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-white">Bem-vindo à área da Oficina</h1>
        <div className="grid grid-cols- 1 md:grid-cols-2 gap-6">
          {/* Histórico de Manutenções */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Histórico de Manutenções</h2>
            <button
              className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
                          <strong>Mecânico:</strong> {item.mecanico}
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

          {/* Informações sobre a Oficina */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Informações sobre a Oficina</h2>
            <div className="flex items-center mb-4">
              <img src="https://picsum.photos/200/400" alt="Oficina" className="w-20 h-20 rounded-full mr-4" />
              <div>
                <h4 className="text-lg font-bold">Oficina XYZ</h4>
                <p>Endereço: Rua ABC, 123 - Centro</p>
                <p>CNPJ: 00.000.000/0000-00</p>
                <button
                        className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Editar
                      </button>
              </div>
            </div>
          </div>

          {/* Informações sobre os Mecânicos */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Informações sobre os Mecânicos</h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Mecânicos Cadastrados</h3>
              <ul>
                {mecanicos.map((mecanico) => (
                  <li key={mecanico.id} className="flex items-center mb-4">
                    <img src={mecanico.foto} alt={mecanico.nome} className="w-20 h-20 rounded-full mr-4" />
                    <div>
                      <h4 className="text-lg font-bold">{mecanico.nome}</h4>
                      <p>Idade: {mecanico.idade}</p>
                      <p>Sexo: {mecanico.sexo}</p>
                      <p>Curso: {mecanico.curso}</p>
                      <button
                        className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleEditMecanico(mecanico.id)}
                      >
                        Editar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleCadastrarMecanico}
            >
              Cadastrar Mecânicos
            </button>
            {showForm && (
              <div className="mt-4">
                <form className="bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
                  <h2 className="text-2xl mb-6 text-white">Cadastro de Mecânicos</h2>
                  <MechanicForm
                    nome={mecanico.nome}
                    idade={mecanico.idade}
                    sexo ={mecanico.sexo}
                    curso={mecanico.curso}
                  />
                  <div className="mb-4">
                    <label className="text-white">Foto do Mecânico:</label>
                    <div className="flex justify-center items-center">
                      <label className="w-full px-3 py-2 border-none rounded bg-gray-700 text-white flex justify-center items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M 19 13l-7 7-6.12-6.12a4.5 4.5 0 01-1.41-3.6L5.5 6.5C4.55 5.59 4 5.12 4 4.5c0-1.11.45-2.11 1.17-2.96a13.03 13.03 0 00-1.05-2.22A10.03 10.03 0 011.45 3.5L12 2.5C12.55 2.09 13.09 2 13.67 2h.67C14.31 2 14.97 2.09 15.55 2.5L19 5.5C20.45 6.59 21 7.12 21 7.5c0 .38-.15.75-.35 1.03z" />
                        </svg>
                        <span className="ml-2">Anexar</span>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600" >
                    Adicionar
                  </button>
                  <button type="button" onClick={handleCloseForm} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-2" >
                    Fechar
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Agenda */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Agenda</h2>
            <button
              className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleShowAgenda}
            >
              {showAgenda ? 'Esconder Agenda' : 'Mostrar Agenda'}
            </button>
            {showAgenda && (
              <div className="mt-4 bg-gray-100 p-4 rounded">
                <Calendar />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OficinaPage;
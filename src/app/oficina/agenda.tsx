import { useState } from 'react';

interface Agenda {
  id: number;
  data: string;
  hora: string;
  descricao: string;
}

const AgendaPage = () => {
  const [agenda, setAgenda] = useState<Agenda[]>([]);
  const [mes, setMes] = useState(new Date().getMonth());
  const [ano, setAno] = useState(new Date().getFullYear());

  const handleAddAgenda = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = formData.get('data') as string;
    const hora = formData.get('hora') as string;
    const descricao = formData.get('descricao') as string;
    setAgenda([...agenda, { id: agenda.length + 1, data, hora, descricao }]);
  };

  const handleMesAnterior = () => {
    if (mes === 0) {
      setMes(11);
      setAno(ano - 1);
    } else {
      setMes(mes - 1);
    }
  };

  const handleProximoMes = () => {
    if (mes === 11) {
      setMes(0);
      setAno(ano + 1);
    } else {
      setMes(mes + 1);
    }
  };

  return (
    <div className="p-4 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Agenda</h1>
      <form onSubmit={handleAddAgenda}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="data">
            Data
          </label>
          <input
            type="date"
            id="data"
            name="data"
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="hora">
            Hora
          </label>
          <input
            type="time"
            id="hora"
            name="hora"
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="descricao">
            Descrição
          </label>
          <textarea
            id="descricao"
            name="descricao"
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Adicionar
        </button>
      </form>
      <div className="flex justify-between mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleMesAnterior}
        >
          Mês Anterior
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleProximoMes}
        >
          Próximo Mês
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Dia</th>
            <th className="text-left">Tarefas</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((dia) => (
            <tr key={dia}>
              <td className="text-left">{dia}</td>
              <td className="text-left">
                {agenda
                  .filter((tarefa) => new Date(tarefa.data).getDate() === dia && new Date(tarefa.data).getMonth() === mes && new Date(tarefa.data).getFullYear() === ano)
                  .map((tarefa) => (
                    <div key={tarefa.id}>
                      <span>{tarefa.hora}</span> - <span>{tarefa.descricao}</span>
                    </div>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgendaPage;
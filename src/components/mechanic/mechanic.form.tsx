import { useState } from 'react';

interface MechanicFormProps {
  nome: string;
  idade: number;
  sexo: string;
  curso: string;
}

const MechanicForm = ({ nome, idade, sexo, curso }: MechanicFormProps) => {
  const [nomeState, setNomeState] = useState(nome);
  const [idadeState, setIdadeState] = useState(idade);
  const [sexoState, setSexoState] = useState(sexo);
  const [cursoState, setCursoState] = useState(curso);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nome':
        setNomeState(value);
        break;
      case 'idade':
        setIdadeState(Number(value));
        break;
      case 'sexo':
        setSexoState(value);
        break;
      case 'curso':
        setCursoState(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2 text-white" htmlFor="nome">
          Nome do Mecânico
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nomeState}
          onChange={handleInputChange}
          className="w-full p-2 pl-10 text-sm text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-white" htmlFor="idade">
          Idade do Mecânico
        </label>
        <input
          type="number"
          id="idade"
          name="idade"
          value={idadeState}
          onChange={handleInputChange}
          className="w-full p-2 pl-10 text-sm text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-white" htmlFor="sexo">
          Sexo do Mecânico
        </label>
        <select
          id="sexo"
          name="sexo"
          value={sexoState}
          onChange={handleInputChange}
          className="w-full p-2 pl-10 text-sm text-gray-700"
        >
          <option value="">Selecione o sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-white" htmlFor="curso">
          Curso do Mecânico
        </label>
        <input
          type="text"
          id="curso"
          name="curso"
          value={cursoState}
          onChange={handleInputChange}
          className="w-full p-2 pl-10 text-sm text-gray-700"
        />
      </div>
    </div>
  );
};

export default MechanicForm;
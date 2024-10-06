import Veiculo from '../core/Veiculo';
let veiculosList: Veiculo[] = [
  new Veiculo(1, "CBR 1000RR-R",
    "A moto muito R",
    "Vendida",
  ),
  new Veiculo(2, "S1000RR",
    "A moto mais rapida",
    "Disponivel",
  )
]
let proximoId = veiculosList.length + 1;

export const fetchVeiculos = async (): Promise<Veiculo[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return veiculosList;
  } catch (error) {
    throw new Error('Erro ao buscar motos');
  }
};

export const cadastrarVeiculo = async (novoVeiculo: Veiculo): Promise<Veiculo> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    novoVeiculo.id = proximoId++;
    veiculosList.push(novoVeiculo);
    return novoVeiculo;
  } catch (error) {
    console.error("Erro ao cadastrar moto:", error);
    throw error;
  }
};

export const atualizarVeiculo = async (veiculoAtualizado: Veiculo): Promise<Veiculo> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = veiculosList.findIndex((veiculo) => veiculo.id === veiculoAtualizado.id);
    if (index !== -1) {
        veiculosList[index] = veiculoAtualizado;
      return veiculoAtualizado;
    } else {
      throw new Error('Moto não encontrada');
    }
  } catch (error) {
    console.error("Erro ao atualizar moto:", error);
    throw error;
  }
};

export const excluirVeiculo = async (id: number): Promise<void> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    veiculosList = veiculosList.filter((veiculo) => veiculo.id !== id);
  } catch (error) {
    console.error("Erro ao excluir moto:", error);
    throw error;
  }
};


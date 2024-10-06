import { stringParaEntradaDeData } from "@/utils/converters";

export default class Veiculo {
    id: number | null;
    modelo: string;
    ano: string;
    status: string;

    constructor(id: number | null, modelo: string, 
        ano: string, status: string) {
        this.id = id;
        this.modelo = modelo;
        this.ano = ano;
        this.status = status;
    }

    static geraVeiculosMock() {
        return [
            new Veiculo(1, "CBR 1000 RR-R",
            "A Veiculo com mais R",
            "Vendida",
          ),
          new Veiculo(2, "S1000RR",
            "A moto mais rapida",
            "Disponivel",
          )
        ]
      }


    static vazio(): Veiculo {
      return new Veiculo(null, "",  "", "");
    }
}
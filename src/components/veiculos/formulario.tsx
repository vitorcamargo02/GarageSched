import Veiculo from "@/core/Veiculo";
import Entrada from "./entrada";
import { useState } from "react";
import Botao from "./botao";

interface FormularioProps {
    veiculo: Veiculo
    veiculoMudou?: (veiculo: Veiculo) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.veiculo?.id
    const [modelo, setModelo] = useState(props.veiculo?.modelo)
    const [ano, setAno] = useState(props.veiculo?.ano)
    const [status, setStatus] = useState(props.veiculo?.status)

    return (
        <div>
            {id ? (<Entrada texto="id" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="Modelo" valor={modelo} onChange={setModelo}></Entrada>
            <Entrada texto="Ano" valor={ano} onChange={setAno}></Entrada>
            <Entrada texto="Status" valor={status} onChange={setStatus}></Entrada>
            <div className="flex justify-end mt-5">
                <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700"
                    onClick={() => props.veiculoMudou?.(new Veiculo(
                        id, modelo, ano, status))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="bg-gradient-to-r from-gray-500 to-gray-700"
                    onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
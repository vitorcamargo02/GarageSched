import Veiculo from "@/core/Veiculo"
import { IconeEdicao, IconeLixo } from "../icones/tabela"

interface TabelaProps {
    veiculos: Veiculo[]
    veiculoSelecionado?: (veiculo: Veiculo) => void
    veiculoExcluido?: (veiculo: Veiculo) => void
}

export default function Tabela(props: TabelaProps) {
    
    const exibirAcoes = props.veiculoSelecionado || props.veiculoExcluido

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">Id</th>
                <th className="text-left p-3">Modelo</th>
                <th className="text-left p-3">Ano</th>
                <th className="text-left p-3">Status</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}
            </tr>
        )
    }

    function renderDados() {
        return props.veiculos?.map((veiculo, i) => {
            return (
                <tr key={veiculo.id}
                    className={`${i % 2 === 0 ? 'bg-red-100' : 'bg-red-200'} `}>
                    <td className="text-left p-3">{veiculo.id}</td>
                    <td className="text-left p-3">{veiculo.modelo}</td>
                    <td className="text-left p-3">{veiculo.ano}</td>
                    <td className="text-left p-3">{veiculo.status}</td>
                    {exibirAcoes 
                    ? renderizarAcoes(veiculo)
                    : false }
                </tr>
            )
        })
    }

    function renderizarAcoes(veiculo: Veiculo) {
        return (
            <td className="flex justify-center">
                {props.veiculoSelecionado ? (
                    <button onClick={() => props.veiculoSelecionado?.(veiculo)} className={`flex justify-center items
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-gray-300`}>{IconeEdicao}</button>
                ) : false }
                {props.veiculoExcluido ? (
                    <button onClick={() => props.veiculoExcluido?.(veiculo)} className={`flex justify-center items
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-gray-300`}>{IconeLixo}</button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-200
            bg-gradient-to-r from-red-500 to-indigo-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}
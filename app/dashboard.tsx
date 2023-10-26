import App from "@/component/modal";

export default function Dashboad() {
    return (
        <>
            <div className="text-sm bg-slate-800 font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <a href="#" className=" adicionar inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                            <App/>
                        </a>
                    </li>
                </ul>
            </div>
            <main className="bg-slate-800 rounded-lg mt-2 mb-2">
                <div className="grid grid-cols-1">
                    <div>
                        <div className="relative overflow-x-auto p-5">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="bg-slate-50 text-slate-950">
                                    <th scope="col" className="px-6 py-3 text-dark rounded-l-lg">
                                        Conta
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Valor
                                    </th>
                                    <th scope="col" className="px-6 py-3 py-3">
                                        Mês
                                    </th>
                                    <th scope="col" className="px-6 py-3 py-3">
                                        Situação
                                    </th>
                                    <th scope="col" className="px-6 py-3 py-3">
                                        Categoria
                                    </th>
                                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                                        Parcela
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Cartão de Crédito
                                    </th>
                                    <td className="px-6 py-4">
                                        R$ 380,50
                                    </td>
                                    <td className="px-6 py-4">
                                        24/10/23
                                    </td>
                                    <td className="px-6 py-4">
                                        Pago
                                    </td>
                                    <td className="px-6 py-4">
                                        Conta Fixa
                                    </td>
                                    <td className="px-6 py-4">
                                        4/10
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Playstaion 5
                                    </th>
                                    <td className="px-6 py-4">
                                        R$ 3.999,99
                                    </td>
                                    <td className="px-6 py-4">
                                        07/10/23
                                    </td>
                                    <td className="px-6 py-4">
                                        Pago
                                    </td>
                                    <td className="px-6 py-4">
                                        Outros
                                    </td>
                                    <td className="px-6 py-4">
                                        1/1
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        CDB
                                    </th>
                                    <td className="px-6 py-4">
                                        R$ 4.000,00
                                    </td>
                                    <td className="px-6 py-4">
                                        07/10/23
                                    </td>
                                    <td className="px-6 py-4">
                                        Investido
                                    </td>
                                    <td className="px-6 py-4">
                                        Investimento
                                    </td>
                                    <td className="px-6 py-4">
                                        N/A
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr className="font-semibold text-gray-900 dark:text-white ">
                                    <th scope="row" className="px-6 py-3 text-base">Total</th>
                                    <td className="px-6 py-3">3</td>
                                    <td className="px-6 py-3">21,000</td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <hr/>
                    <div className="grid grid-cols-2 gap-2">
                        <div class="p-4">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-white-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Pagos
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Valor
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Data Pagamento
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Parcela
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-lime-300	">
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Cartão de Credito
                                        </th>
                                        <td className="px-6 py-4">
                                            R$ 380,50
                                        </td>
                                        <td className="px-6 py-4">
                                            10/10/2023
                                        </td>
                                        <td className="px-6 py-4">
                                            3
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-white-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Em Débito
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Valor
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Data Pagamento
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Parcela
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-red-500">
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Cartão de Credito
                                        </th>
                                        <td className="px-6 py-4">
                                            R$ 380,50
                                        </td>
                                        <td className="px-6 py-4">
                                            10/10/2023
                                        </td>
                                        <td className="px-6 py-4">
                                            3
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    <div className="relative overflow-x-auto mt-5">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-white-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Últimas Entradas
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Valor
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Investimento
                                </th>
                                <td className="px-6 py-4">
                                    R$ 1.500
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}
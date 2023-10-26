export default function Home() {
  return (
    <main className="bg-slate-800 rounded mb-4">
            <div className="grid grid-cols-3 gap-4 p-4">
                <div className="">
                    <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-red-500 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contas</h5>
                        <p className="mb-3 font-normal text-gray-700 text-white">R$ 3.500,00</p>
                    </div>
                </div>
                <div className="">
                    <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-lime-400 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Salário</h5>
                        <p className="mb-3 font-normal text-gray-700 text-white">R$ 10.000,00</p>
                    </div>
                </div>
                <div className="">
                    <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-violet-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Débito</h5>
                        <p className="mb-3 font-normal text-gray-700 text-white">R$ 6.500,00</p>
                    </div>
                </div>
            </div>
            <div className="min-w-0 flex-1">
            </div>
    </main>
  )
}

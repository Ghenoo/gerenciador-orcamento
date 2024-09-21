'use client'

import { useBudget } from '@/contexts/BudgetContext'
import IncomeForm from '@/components/IconeForm'
import ExpenseForm from '@/components/ExpanseForm'
import TransactionList from '@/components/TransactionList'

export default function Dashboard() {
  const { totalIncome, totalExpenses, balance } = useBudget()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-poppins font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-green-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Total de Receitas</h2>
          <p className="text-2xl font-bold text-green-600">R$ {totalIncome.toFixed(2)}</p>
        </div>
        <div className="bg-red-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Total de Despesas</h2>
          <p className="text-2xl font-bold text-red-600">R$ {totalExpenses.toFixed(2)}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Saldo</h2>
          <p className="text-2xl font-bold text-blue-600">R$ {balance.toFixed(2)}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-poppins font-bold mb-4">Adicionar Receita</h2>
          <IncomeForm />
        </div>
        <div>
          <h2 className="text-2xl font-poppins font-bold mb-4">Adicionar Despesa</h2>
          <ExpenseForm />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-poppins font-bold mb-4">Transações Recentes</h2>
        <TransactionList />
      </div>
    </main>
  )
}
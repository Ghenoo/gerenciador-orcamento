'use client'

import { useState } from 'react'
import { useBudget } from '@/contexts/BudgetContext'

export default function IncomeForm() {
  const [amount, setAmount] = useState<number>(0)
  const [description, setDescription] = useState<string>('')
  const { addTransaction } = useBudget()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addTransaction({ amount, description, type: 'income' })
    setAmount(0)
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="incomeAmount" className="block mb-1">Valor</label>
        <input
          type="number"
          id="incomeAmount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="incomeDescription" className="block mb-1">Descrição</label>
        <input
          type="text"
          id="incomeDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
        Adicionar Receita
      </button>
    </form>
  )
}
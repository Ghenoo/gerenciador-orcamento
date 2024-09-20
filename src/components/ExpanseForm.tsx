'use client'

import { useState } from 'react'
import { useBudget } from '@/contexts/BudgetContext'

export default function ExpenseForm() {
  const [amount, setAmount] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const { addTransaction } = useBudget()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numAmount = parseFloat(amount)
    if (!isNaN(numAmount) && numAmount > 0) {
      addTransaction({ amount: numAmount, description, type: 'expense' })
      setAmount('')
      setDescription('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="expenseAmount" className="block mb-1">Valor</label>
        <input
          type="number"
          id="expenseAmount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          required
          min="0"
          step="0.01"
          placeholder="Digite o valor da despesa"
        />
      </div>
      <div>
        <label htmlFor="expenseDescription" className="block mb-1">Descrição</label>
        <input
          type="text"
          id="expenseDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
          placeholder="Digite a descrição da despesa"
        />
      </div>
      <button 
        type="submit" 
        className="w-full font-bold bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300"
      >
        Adicionar Despesa
      </button>
    </form>
  )
}
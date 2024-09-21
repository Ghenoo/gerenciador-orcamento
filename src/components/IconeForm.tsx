'use client'

import { useState } from 'react'
import { useBudget } from '@/contexts/BudgetContext'

export default function IncomeForm() {
  const [amount, setAmount] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const { addTransaction } = useBudget()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numAmount = parseFloat(amount)
    if (!isNaN(numAmount) && numAmount > 0) {
      addTransaction({ amount: numAmount, description, type: 'income' })
      setAmount('')
      setDescription('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="incomeAmount" className="block font-poppins  mb-1">Valor</label>
        <input
          type="number"
          id="incomeAmount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full font-poppins p-2 border rounded"
          required
          min="0"
          step="0.01"
          placeholder="Digite o valor da receita"
        />
      </div>
      <div>
        <label htmlFor="incomeDescription" className="block font-poppins mb-1">Descrição</label>
        <input
          type="text"
          id="incomeDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full font-poppins p-2 border rounded"
          required
          placeholder="Digite a descrição da receita"
        />
      </div>
      <button 
        type="submit" 
        className="w-full font-poppins font-bold bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300"
      >
        Adicionar Receita
      </button>
    </form>
  )
}
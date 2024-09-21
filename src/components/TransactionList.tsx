'use client'

import React from 'react'
import { useBudget } from '@/contexts/BudgetContext'
import { FaTrash, FaEdit } from 'react-icons/fa'

export default function TransactionList() {
  const { transactions, removeTransaction, editTransaction } = useBudget()

  const handleEdit = (id: number, currentAmount: number, currentDescription: string, currentType: 'income' | 'expense') => {
    const newAmount = prompt('Novo valor:', currentAmount.toString())
    const newDescription = prompt('Nova descrição:', currentDescription)
    
    if (newAmount && newDescription) {
      editTransaction(id, {
        amount: parseFloat(newAmount),
        description: newDescription,
        type: currentType
      })
    }
  }

  if (!transactions || transactions.length === 0) {
    return <p>Nenhuma transação registrada.</p>
  }

  return (
    <ul className="space-y-2">
      {transactions.map((t) => (
        <li key={t.id} className={`flex justify-between font-poppins items-center p-2 rounded ${t.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
          <span>{t.description}: R$ {t.amount?.toFixed(2) ?? '0.00'}</span>
          <div>
            <button
              onClick={() => handleEdit(t.id, t.amount, t.description, t.type)}
              className="text-blue-500 mr-2"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => removeTransaction(t.id)}
              className="text-red-500 "
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
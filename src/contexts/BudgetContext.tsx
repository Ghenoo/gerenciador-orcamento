'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface Transaction {
  id: number
  amount: number
  description: string
  type: 'income' | 'expense'
}

interface BudgetContextData {
  transactions: Transaction[]
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void
  removeTransaction: (id: number) => void
  editTransaction: (id: number, updatedTransaction: Omit<Transaction, 'id'>) => void
  totalIncome: number
  totalExpenses: number
  balance: number
}

const BudgetContext = createContext<BudgetContextData>({} as BudgetContextData)

export const useBudget = () => useContext(BudgetContext)

export const BudgetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadTransactions = () => {
      const storedTransactions = localStorage.getItem('budgetTransactions')
      if (storedTransactions) {
        setTransactions(JSON.parse(storedTransactions))
      }
      setIsLoaded(true)
    }

    if (typeof window !== 'undefined') {
      loadTransactions()
    }
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('budgetTransactions', JSON.stringify(transactions))
    }
  }, [transactions, isLoaded])

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now(),
    }
    setTransactions(prevTransactions => [...prevTransactions, newTransaction])
  }

  const removeTransaction = (id: number) => {
    setTransactions(prevTransactions => prevTransactions.filter(t => t.id !== id))
  }

  const editTransaction = (id: number, updatedTransaction: Omit<Transaction, 'id'>) => {
    setTransactions(prevTransactions => prevTransactions.map(t => 
      t.id === id ? { ...updatedTransaction, id } : t
    ))
  }

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpenses

  return (
    <BudgetContext.Provider value={{
      transactions: transactions || [],  
      addTransaction,
      removeTransaction,
      editTransaction,
      totalIncome,
      totalExpenses,
      balance,
    }}>
      {children}
    </BudgetContext.Provider>
  )
}

export default BudgetProvider
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { BudgetProvider } from '@/contexts/BudgetContext'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gerenciador de Orçamento Pessoal',
  description: 'Gerencie suas finanças pessoais com facilidade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BudgetProvider>
          <Navigation />
          {children}
        </BudgetProvider>
      </body>
    </html>
  )
}

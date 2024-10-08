import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gerenciador de Orçamento Pessoal',
  description: 'Gerencie suas finanças pessoais com facilidade',
}

const BudgetProviderNoSSR = dynamic(
  () => import('@/contexts/BudgetContext').then((mod) => mod.BudgetProvider),
  { ssr: false }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <BudgetProviderNoSSR>
          <Navigation />
          {children}
        </BudgetProviderNoSSR>
      </body>
    </html>
  )
}
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Gerenciador de Orçamento Pessoal do Ghenoninho 🦧</h1>
      <p className="mb-4">
        Este site vai te ajudar a gerenciar sua renda e despesas mensais.
        Você pode adicionar, editar e excluir entradas de renda e despesas,
        e visualizar um resumo do seu orçamento no dashboard.
      </p>
      <h2 className="text-2xl font-bold mb-2">Como funciona:</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>O login ainda não está funcionando...preciso aprender sobre o firebase, uma hora vai funcionar kkkkkkkkkk mas o /login existe e a lógica está 
          quase pronta, só falta a parte da autenticação.</li>
        <li>Acesse o Dashboard para adicionar suas receitas e despesas.</li>
        <li>Visualize o resumo do seu orçamento, incluindo o saldo total.</li>
        <li>Gerencie suas finanças com mais facilidade.</li>
      </ol>
      <Link href="/dashboard" className="font-bold bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Dashboard
      </Link>
    </main>
  )
}
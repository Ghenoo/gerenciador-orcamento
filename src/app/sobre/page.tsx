export default function About() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Sobre o Gerenciador de Orçamento Pessoal do Ghenoninho 🦧</h1>
        <p className="mb-4">
          Este site foi criado como um projeto para uma matéria da faculdade.
        </p>
        <h2 className="text-2xl font-bold mb-2">Stacks utilizadas:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Next.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Context API para gerenciamento de estado</li>
          <li>LocalStorage para armazenamento de dados local</li>
          <li>React-icons para icons</li>

        </ul>
      </main>
    )
  }
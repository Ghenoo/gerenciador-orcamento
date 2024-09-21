export default function About() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-poppins font-bold mb-4">Sobre o Gerenciador de Orçamento Pessoal do Ghenoninho 🦧</h1>
        <p className="font-poppins mb-4">
          Este site foi criado como um projeto para uma matéria da faculdade.
        </p>
        <h2 className="font-poppins text-2xl font-bold mb-2">Stacks e tecnologias utilizadas:</h2>
        <ul className="font-poppins list-disc list-inside mb-4">
          <li>Next.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Context API</li>
          <li>LocalStorage</li>
          <li>React-icons</li>

        </ul>
      </main>
    )
  }
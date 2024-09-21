'use client'

import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Preciso implementar a lógica de login com a firebase :(
    console.log('Login com:', email, password)
  }

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-poppins font-bold mb-6">Login</h1>
      <button className="w-full bg-red-500 font-poppins text-white p-2 rounded flex items-center justify-center mb-4">
        <FaGoogle className="mr-2" /> Entrar com Google
      </button>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full font-poppins p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full font-poppins p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full font-poppins bg-blue-500 text-white p-2 rounded">
          Entrar
        </button>
      </form>
    </main>
  )
}
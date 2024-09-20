import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-gray-500 text-white p-4">
      <ul className="flex space-x-5">
        <li><Link href="/" className="font-bold hover:text-gray-300">Home</Link></li>
        <li><Link href="/dashboard" className="font-bold hover:text-gray-300">Dashboard</Link></li>
        <li><Link href="/sobre" className="font-bold hover:text-gray-300">Sobre</Link></li>
      </ul>
    </nav>
  )
}
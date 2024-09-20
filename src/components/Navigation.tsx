import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
        <li><Link href="/sobre" className="hover:text-gray-300">Sobre</Link></li>
      </ul>
    </nav>
  )
}
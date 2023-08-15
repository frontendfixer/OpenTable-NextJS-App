import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-2">
      <Link
        href="/"
        className="item-center flex gap-2 text-2xl font-bold text-gray-700 transition-colors duration-300 hover:text-red-500"
      >
        <Image src="/logo.svg" width={29} height={29} alt="" aria-hidden />
        OpenTable
      </Link>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 rounded border bg-blue-400 px-4 py-2 font-medium text-white transition hover:opacity-80">
          <FontAwesomeIcon icon={faRightToBracket} className="w-4" />
          Sign in
        </button>
        <button className="flex items-center gap-2 rounded border px-4 py-2 font-medium transition hover:border-blue-400">
          <FontAwesomeIcon icon={faUserPlus} className="w-4" />
          Sign up
        </button>
      </div>
    </nav>
  )
}

export default Navbar

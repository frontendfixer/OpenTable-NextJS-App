import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2">
      <Link
        href="/"
        className="item-center flex gap-1 py-2 pr-2 text-xl font-bold text-gray-700 transition-colors duration-200 hover:text-red-700"
      >
        <Image
          src="/logo.svg"
          width={27}
          height={27}
          alt=""
          aria-hidden
          className="p-1"
        />
        OpenTable
      </Link>
      <div className="flex gap-4">
        <button className="flex items-center gap-1 rounded-md border bg-blue-500 px-4 py-2 text-white transition hover:opacity-80">
          <FontAwesomeIcon icon={faRightToBracket} className="w-4" />
          <span className="hidden font-medium md:block">Sign in</span>
        </button>
        <button className="flex items-center gap-1 rounded-md border px-4 py-2 transition hover:border-blue-500">
          <FontAwesomeIcon icon={faUserPlus} className="w-4" />
          <span className="hidden font-medium md:block">Sign up</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

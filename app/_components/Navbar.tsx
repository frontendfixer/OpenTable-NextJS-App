import Image from 'next/image'
import Link from 'next/link'
import AuthModal from './AuthModal'

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
        <AuthModal isSignIn={true} />
        <AuthModal isSignIn={false} />
      </div>
    </nav>
  )
}

export default Navbar

'use client'

import Image from 'next/image'
import Link from 'next/link'
import AuthModal from './AuthModal'
import { useContext } from 'react'
import { AuthenticationContext } from '../context/AuthContext'
import useAuth from '@/hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const { loading, data } = useContext(AuthenticationContext)
  const { signOut } = useAuth()
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
      <>
        {loading ? null : (
          <div className="flex gap-4">
            {data ? (
              <button
                className="flex items-center gap-1 rounded-md border bg-red-500 px-4 py-2 text-white transition hover:opacity-80"
                onClick={signOut}
              >
                <FontAwesomeIcon icon={faRightFromBracket} className="w-4" />
                <span className="hidden font-medium md:block">Sign in</span>
              </button>
            ) : (
              <>
                <AuthModal isSignIn={true} />
                <AuthModal isSignIn={false} />
              </>
            )}
          </div>
        )}
      </>
    </nav>
  )
}

export default Navbar

'use client'

import Image from 'next/image'
import Link from 'next/link'
import AuthModal from './AuthModal'
import { useContext, useState } from 'react'
import { AuthenticationContext } from '../context/AuthContext'
import useAuth from '@/hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { CircularProgress } from '@mui/material'
import UserCard from './UserCard'

const Navbar = () => {
  const [isUserCardOpen, setIsUserCardOpen] = useState(false)

  const { loading, data } = useContext(AuthenticationContext)

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
        {loading ? (
          <CircularProgress color="primary" size={27} />
        ) : (
          <>
            {data ? (
              <>
                <FontAwesomeIcon
                  icon={faUserAlt}
                  className="h-6 w-6 rounded-full bg-red-600 p-1 text-white"
                  onClick={() => setIsUserCardOpen(!isUserCardOpen)}
                />
                {isUserCardOpen ? <UserCard /> : ''}
              </>
            ) : (
              <>
                <AuthModal isSignIn={true} />
                <AuthModal isSignIn={false} />
              </>
            )}
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar

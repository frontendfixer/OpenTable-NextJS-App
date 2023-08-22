'use client'

import { useContext } from 'react'
import { AuthenticationContext } from '../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import useAuth from '@/hooks/useAuth'

const UserCard = () => {
  const { data } = useContext(AuthenticationContext)
  const { signOut } = useAuth()
  return (
    <div className="absolute right-4 top-16 flex flex-col items-center gap-2 rounded bg-slate-100 px-4 py-4 shadow-lg">
      <FontAwesomeIcon
        icon={faUser}
        className="h-10 w-10 rounded-full bg-red-400 p-3 text-white"
      />
      <h2 className="text-lg font-bold">{`${data?.firstName} ${data?.lastName}`}</h2>
      <div className="w-full bg-red-100 px-3 py-4 text-left">
        <p className="capitalize">City: {data?.city}</p>
        <p>Phone: {data?.phone}</p>
        <p className="text-sm">Email: {data?.email}</p>
      </div>
      <button
        className="flex w-full items-center justify-center gap-2 rounded-md border bg-red-600 px-4 py-2 text-white transition hover:opacity-80"
        onClick={signOut}
      >
        <FontAwesomeIcon icon={faRightFromBracket} className="w-4" />
        <span className="hidden font-medium md:block">Sign out</span>
      </button>
    </div>
  )
}

export default UserCard

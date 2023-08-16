'use client'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchBar = () => {
  const router = useRouter()
  const [location, setLocation] = useState('')
  return (
    <div className=" mx-auto flex flex-col items-center justify-center gap-4 px-10 py-3 text-left md:flex-row">
      <div className="relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-3 h-5 w-5 bg-white text-gray-400"
        />
        <input
          type="text"
          className="w-80 rounded border-none p-2 pl-10 text-lg outline-none md:w-96"
          placeholder="City, Town, or Restaurant"
          onChange={(e) => setLocation(() => e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          if (location === 'banana') return
          router.push('/search')
        }}
        className="w-80 rounded bg-red-600 px-8 py-2 text-lg font-medium text-white md:w-max"
      >
        Let&apos;s go
      </button>
    </div>
  )
}

export default SearchBar

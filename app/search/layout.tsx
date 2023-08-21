import Header from './_components/Header'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Search - Open Table Restaurant',
}

const Search = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="m-auto flex w-4/5 items-start justify-between py-4">
        {children}
      </div>
    </>
  )
}

export default Search

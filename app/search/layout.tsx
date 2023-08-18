import Header from './_components/Header'
import SearchSideBar from './_components/SearchSideBar'
import { Metadata } from 'next'
import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Search - Open Table Restaurant',
}

type SearchParams = { city?: string; cuisine?: string; price?: PRICE }

const prisma = new PrismaClient()
const fetchLocations = async (): Promise<Location[]> => {
  const locations = await prisma.location.findMany()
  return locations
}
const fetchCuisine = async (): Promise<Cuisine[]> => {
  const cuisines = await prisma.cuisine.findMany()
  return cuisines
}

const Search = async ({
  children,
  searchParams,
}: {
  children: ReactNode
  searchParams: SearchParams
}) => {
  const locations = await fetchLocations()
  const cuisines = await fetchCuisine()
  return (
    <>
      <Header />
      <div className="m-auto flex w-4/5 items-start justify-between py-4">
        <div className="w-1/5">
          <SearchSideBar
            locations={locations}
            cuisines={cuisines}
            searchParams={searchParams}
          />
        </div>
        {children}
      </div>
    </>
  )
}

export default Search

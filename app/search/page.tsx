import Header from './_components/Header'
import SearchSideBar from './_components/SearchSideBar'
import RestaurantCard from './_components/RestaurantCard'
import { Metadata } from 'next'
import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client'

export const metadata: Metadata = {
  title: 'Search - Open Table Restaurant',
}

export type RestaurantByCityType = {
  id: number
  name: string
  description: string
  main_image: string
  slug: string
  price: PRICE
  cuisine: Cuisine
  location: Location
}

const prisma = new PrismaClient()
export const fetchRestaurantByCity = async (
  city: string,
): Promise<RestaurantByCityType[]> => {
  const restaurant = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    select: {
      id: true,
      name: true,
      description: true,
      main_image: true,
      slug: true,
      price: true,
      cuisine: true,
      location: true,
    },
  })
  if (!restaurant) throw new Error()
  return restaurant
}

const fetchLocations = async (): Promise<Location[]> => {
  const locations = await prisma.location.findMany()
  return locations
}
const fetchCuisine = async (): Promise<Cuisine[]> => {
  const cuisines = await prisma.cuisine.findMany()
  return cuisines
}

const Search = async ({
  searchParams,
}: {
  searchParams: { city?: string; cuisine?: string; price?: PRICE }
}) => {
  const city = searchParams.city?.toLocaleLowerCase()!
  const restaurants = await fetchRestaurantByCity(city)
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
        <div className="ml-6 w-4/5">
          {restaurants.length === 0 ? (
            <h2 className="text-3xl font-semibold">
              We have no restaurant at {city}
            </h2>
          ) : (
            <>
              <h2 className="text-2xl">Showing restaurant in {city}</h2>
              {restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} key={restaurant.id} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Search

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

const Search = async ({
  searchParams,
}: {
  searchParams: { city: string | undefined }
}) => {
  const city = searchParams.city?.toLocaleLowerCase()!
  const restaurants = await fetchRestaurantByCity(city)
  return (
    <>
      <Header />
      <div className="m-auto flex w-4/5 items-start justify-between py-4">
        <div className="w-1/5">
          <SearchSideBar />
        </div>
        <div className="ml-6 w-4/5">
          {restaurants.length === 0 ? (
            <h2 className="text-3xl font-semibold">
              We have no restaurant at {city}
            </h2>
          ) : (
            restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Search

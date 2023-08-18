import RestaurantCard from './_components/RestaurantCard'
import { Metadata } from 'next'
import { Cuisine, Location, PRICE, PrismaClient, Review } from '@prisma/client'

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
  Review: Review[]
}

type SearchParams = { city?: string; cuisine?: string; price?: PRICE }

const prisma = new PrismaClient()
export const fetchRestaurantByCity = async (
  searchParams: SearchParams,
): Promise<RestaurantByCityType[]> => {
  const where: any = {}

  if (searchParams.city) {
    const location = {
      name: searchParams.city.toLocaleLowerCase(),
    }
    where.location = location
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: searchParams.cuisine.toLocaleLowerCase(),
    }
    where.cuisine = cuisine
  }

  if (searchParams.price) {
    const price = searchParams.price
    where.price = price
  }

  const restaurant = await prisma.restaurant.findMany({
    where,
    select: {
      id: true,
      name: true,
      description: true,
      main_image: true,
      slug: true,
      price: true,
      cuisine: true,
      location: true,
      Review: true,
    },
  })
  if (!restaurant) throw new Error()
  return restaurant
}

const Search = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchRestaurantByCity(searchParams)
  return (
    <div className="ml-6 w-4/5">
      {restaurants.length === 0 ? (
        <h2 className="text-3xl font-semibold">
          We have no restaurant at {searchParams.city}
        </h2>
      ) : (
        <>
          <h2 className="text-2xl">
            Showing restaurant in {searchParams.city}
          </h2>
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          ))}
        </>
      )}
    </div>
  )
}

export default Search

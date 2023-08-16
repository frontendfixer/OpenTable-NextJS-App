import Header from '@/app/_components/Header'
import RestaurantCard from '@/app/_components/RestaurantCard'
import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client'

export type RestaurantCardType = {
  id: number
  name: string
  main_image: string
  slug: string
  cuisine: Cuisine
  location: Location
  price: PRICE
}

const prisma = new PrismaClient()

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
    },
  })
  return restaurants
}

export default async function Home() {
  const restaurants = await fetchRestaurants()

  return (
    <main>
      <Header />
      <div className="mx-auto mt-10 flex w-[90%] flex-wrap justify-center gap-4 px-2 py-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </main>
  )
}

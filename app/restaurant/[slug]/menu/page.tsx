import { Metadata } from 'next'
import MenuCard from './_components/MenuCard'

export const metadata: Metadata = {
  title: 'Menu  of Milesstone Grill | Open Table Reservation',
  description: 'Menu of Milesstone Grill Restaurant',
}

const RestaurantMenu = () => {
  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="mb-1 mt-4 pb-1">
          <h2 className="text-4xl font-bold">Menu</h2>
        </div>
        <div className="flex flex-wrap justify-between">
          <MenuCard />
        </div>
      </div>
    </main>
  )
}

export default RestaurantMenu

import { Metadata } from 'next'
import MenuCard from './_components/MenuCard'
import { Item, PrismaClient } from '@prisma/client'

export const metadata: Metadata = {
  title: 'Menu  of Milesstone Grill | Open Table Reservation',
  description: 'Menu of Milesstone Grill Restaurant',
}

const prisma = new PrismaClient()
const fetchItemsMenu = async (slug: string): Promise<Item[]> => {
  const restaurantMenu = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      Item: true,
    },
  })
  if (!restaurantMenu) throw new Error()
  return restaurantMenu.Item
}

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menuItems = await fetchItemsMenu(params.slug)

  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="mb-1 mt-4 pb-1">
          <h2 className="text-4xl font-bold">Menu</h2>
        </div>
        <div className="flex flex-wrap justify-between">
          {menuItems.map((menuItem) => (
            <MenuCard key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default RestaurantMenu

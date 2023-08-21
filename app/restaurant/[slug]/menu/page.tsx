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
    <div className="mt-5 bg-white">
      <div className="mb-1 mt-4 pb-1">
        <h2 className="text-4xl font-bold">Menu</h2>
      </div>
      {menuItems.length === 0 ? (
        <h2 className="font-xl font-medium">
          This restaurant doesn&apos;t provide any menu for internet.
        </h2>
      ) : (
        <div className="grid w-full grid-flow-row grid-cols-1 gap-2 md:w-2/3 md:grid-cols-3">
          {menuItems.map((menuItem) => (
            <MenuCard key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      )}
    </div>
  )
}

export default RestaurantMenu

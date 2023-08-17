import { Item } from '@prisma/client'

const MenuCard = ({ menuItem }: { menuItem: Item }) => {
  return (
    <div className=" relative flex flex-col items-start justify-between overflow-hidden rounded-lg border bg-gray-100 p-3">
      <h3 className="mr-10 text-lg font-bold">{menuItem.name}</h3>
      <p className="text-sm font-light">{menuItem.description}</p>
      <p className="absolute right-0 top-0 ml-auto bg-red-500 px-1 py-1 text-sm font-medium text-white">
        {menuItem.price}
      </p>
    </div>
  )
}

export default MenuCard

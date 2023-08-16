import MenuCard from './_components/MenuCard'

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

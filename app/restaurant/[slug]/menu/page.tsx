import Navbar from '@/components/Navbar'
import Header from '../_components/Header'
import RestaurantNavbar from '../_components/RestaurantNavbar'
import MenuCard from './_components/MenuCard'

const RestaurantMenu = () => {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <Navbar />
        <Header />
        <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[100%] rounded bg-white p-3 shadow">
            <RestaurantNavbar />
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
          </div>
        </div>
      </main>
    </main>
  )
}

export default RestaurantMenu

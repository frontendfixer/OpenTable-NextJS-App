import Header from './_components/Header'
import SearchSideBar from './_components/SearchSideBar'
import RestaurantCard from './_components/RestaurantCard'
import Navbar from '../_components/Navbar'

const Search = () => {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <Navbar />
        <Header />
        <div className="m-auto flex w-4/5 items-start justify-between py-4">
          <div className="w-1/5">
            <SearchSideBar />
          </div>
          <div className="ml-6 w-4/5">
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  )
}

export default Search

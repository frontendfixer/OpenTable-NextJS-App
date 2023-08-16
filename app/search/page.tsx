import Header from './_components/Header'
import SearchSideBar from './_components/SearchSideBar'
import RestaurantCard from './_components/RestaurantCard'

const Search = () => {
  return (
    <>
      <Header />
      <div className="m-auto flex w-4/5 items-start justify-between py-4">
        <div className="w-1/5">
          <SearchSideBar />
        </div>
        <div className="ml-6 w-4/5">
          <RestaurantCard />
        </div>
      </div>
    </>
  )
}

export default Search

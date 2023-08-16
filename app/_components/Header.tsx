import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] px-4 py-6">
      <div className="mt-10 text-center">
        <h1 className="mb-2 text-3xl font-bold text-white md:text-5xl">
          Find your table for any occasion
        </h1>
      </div>
      <SearchBar />
    </div>
  )
}

export default Header

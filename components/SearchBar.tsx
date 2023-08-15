import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = () => {
  return (
    <div className="m-auto flex justify-center py-3 text-left">
      <div className="item-center flex">
        <FontAwesomeIcon
          icon={faSearch}
          className="w-6 rounded-bl rounded-tl bg-white pl-2 text-gray-400 "
        />
        <input
          type="text"
          className="mr-3 rounded-br rounded-tr p-2 text-lg focus:border-0 focus:outline-0 "
          placeholder="Location, Restaurant, or Cuisine"
        />
      </div>
      <button className=" rounded bg-red-600 px-9 py-2 text-lg font-medium text-white">
        Let&apos;s go
      </button>
    </div>
  )
}

export default SearchBar

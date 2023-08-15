import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-3 text-left md:flex-row">
      <div className="item-center flex">
        <FontAwesomeIcon
          icon={faSearch}
          className="w-6 rounded-bl rounded-tl bg-white pl-2 text-gray-400"
        />
        <input
          type="text"
          className="rounded-br rounded-tr border-none p-2  text-lg outline-none"
          placeholder="City, Town, or Restaurant"
        />
      </div>
      <button className=" rounded bg-red-600 px-8 py-2 text-lg font-medium text-white">
        Let&apos;s go
      </button>
    </div>
  )
}

export default SearchBar

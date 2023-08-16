import {
  faLocationDot,
  faMoneyBill1,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchSideBar = () => {
  return (
    <>
      <div className="border-b pb-4">
        <h1 className="-ml-5 mb-1 flex items-center gap-1">
          <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
          <span className="text-lg">Region</span>
        </h1>
        <p className="text-reg font-light">Toronto</p>
        <p className="text-reg font-light">Ottawa</p>
        <p className="text-reg font-light">Montreal</p>
        <p className="text-reg font-light">Hamilton</p>
        <p className="text-reg font-light">Kingston</p>
        <p className="text-reg font-light">Niagara</p>
      </div>
      <div className="mt-3 border-b pb-4">
        <h1 className="-ml-5 mb-1 flex items-center gap-1">
          <FontAwesomeIcon icon={faUtensils} className="h-4 w-4" />
          <span className="text-lg">Cuisine</span>
        </h1>
        <p className="text-reg font-light">Mexican</p>
        <p className="text-reg font-light">Italian</p>
        <p className="text-reg font-light">Chinese</p>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="-ml-5 mb-1 flex items-center gap-1">
          <FontAwesomeIcon icon={faMoneyBill1} className="h-4 w-4" />
          <span className="text-lg">Price</span>
        </h1>
        <div className="flex">
          <button className="w-full rounded-l border p-2 text-reg font-light">
            $
          </button>
          <button className="w-full border-b border-r border-t p-2 text-reg font-light">
            $$
          </button>
          <button className="w-full rounded-r border-b border-r border-t p-2 text-reg font-light">
            $$$
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchSideBar

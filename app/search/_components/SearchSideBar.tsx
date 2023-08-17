import {
  faLocationDot,
  faMoneyBill1,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Cuisine, Location, PRICE } from '@prisma/client'
import Link from 'next/link'

const SearchSideBar = ({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[]
  cuisines: Cuisine[]
  searchParams: { city?: string; cuisine?: string; price?: PRICE }
}) => {
  return (
    <>
      <div className="border-b pb-4">
        <h3 className="-ml-5 mb-1 flex items-center gap-1">
          <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
          <span className="text-lg">Region</span>
        </h3>
        <div className="flex flex-col items-start">
          {locations.map((location) => (
            <Link
              href={{
                pathname: '/search',
                query: { ...searchParams, city: location.name },
              }}
              className="text-reg font-light capitalize"
              key={location.id}
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-3 border-b pb-4">
        <h1 className="-ml-5 mb-1 flex items-center gap-1">
          <FontAwesomeIcon icon={faUtensils} className="h-4 w-4" />
          <span className="text-lg">Cuisine</span>
        </h1>
        <div className="flex flex-col items-start">
          {cuisines.map((cuisine) => (
            <Link
              href={{
                pathname: '/search',
                query: { ...searchParams, cuisine: cuisine.name },
              }}
              className="text-reg font-light capitalize"
              key={cuisine.id}
            >
              {cuisine.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="-ml-5 mb-1 flex items-center gap-1">
          <FontAwesomeIcon icon={faMoneyBill1} className="h-4 w-4" />
          <span className="text-lg">Price</span>
        </h1>
        <div className="flex">
          <Link
            href={{
              pathname: '/search',
              query: { ...searchParams, price: PRICE.CHEAP },
            }}
            className="w-full rounded-l border p-2 text-center text-reg font-light"
          >
            $
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: { ...searchParams, price: PRICE.REGULAR },
            }}
            className="w-full border-b border-r border-t p-2 text-center text-reg font-light"
          >
            $$
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: { ...searchParams, price: PRICE.EXPENSIVE },
            }}
            className="w-full rounded-r border-b border-r border-t p-2 text-center text-reg font-light"
          >
            $$$
          </Link>
        </div>
      </div>
    </>
  )
}

export default SearchSideBar

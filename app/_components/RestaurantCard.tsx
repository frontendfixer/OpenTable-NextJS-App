import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import { RestaurantCardType } from '../page'
import Link from 'next/link'
import PriceTag from './PriceTag'
import Starts from './Stars'
import { calcReviewAverage } from '@/utils/CalculateReviewAverage'

type Props = {
  restaurant: RestaurantCardType
}

const RestaurantCard = ({ restaurant }: Props) => {
  const { main_image, name, cuisine, location, price, slug, Review } =
    restaurant

  return (
    <Link href={`restaurant/${slug}`}>
      <div className="max-w-[256px] cursor-pointer overflow-hidden rounded-lg border-2 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
        <Image
          src={main_image}
          alt=""
          width={256}
          height={128}
          style={{
            width: '256px',
            height: '128px',
            objectFit: 'cover',
          }}
        />
        <div className="p-2">
          <h3 className="mb-2 text-2xl font-medium">{name}</h3>
          <div className="flex items-center">
            <div className="mb-2 flex">{<Starts reviews={Review} />}</div>
            <p className="ml-2 text-reg">
              {restaurant.Review.length}{' '}
              {restaurant.Review.length > 1 ? 'reviews' : 'review'}
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2 text-reg font-light capitalize">
            <p>{cuisine.name}</p>
            <span className="h-1 w-1 rounded-full bg-black" />
            <p>{<PriceTag price={price} />}</p>
            <span className="h-1 w-1 rounded-full bg-black" />
            <p>{location.name}</p>
          </div>
          <p className="mt-4 flex items-center text-sm font-bold">
            <FontAwesomeIcon icon={faShareFromSquare} className="mr-1 w-5" />
            Booked 3 times today
          </p>
        </div>
      </div>
    </Link>
  )
}

export default RestaurantCard

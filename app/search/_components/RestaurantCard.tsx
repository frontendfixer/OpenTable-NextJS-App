import Image from 'next/image'
import Link from 'next/link'
import { RestaurantByCityType } from '../page'
import PriceTag from '@/app/_components/PriceTag'
import { calcReviewAverage } from '@/utils/CalculateReviewAverage'

const RestaurantCard = ({
  restaurant,
}: {
  restaurant: RestaurantByCityType
}) => {
  const {
    name,
    description,
    price,
    location,
    cuisine,
    slug,
    main_image,
    Review,
  } = restaurant

  const renderRatingText = () => {
    const rating = calcReviewAverage(Review)

    if (rating > 4) return 'Awesome'
    if (rating <= 4 && rating > 3) return 'Good'
    if (rating <= 3 && rating > 0) return 'Average'
    else return 'not rated'
  }

  return (
    <div className=" mt-5 flex w-full gap-4 border-b pb-5 md:w-2/3">
      <Image
        src={main_image}
        width={240}
        height={240}
        alt={name}
        className="w-40 rounded"
      />

      <div className="flex flex-col justify-center py-1">
        <h2 className="text-3xl font-medium">{name}</h2>
        <p className="max-w-[50ch] truncate text-sm text-gray-600">
          {description}
        </p>
        <div className="mt-3 flex items-start gap-2">
          <div className="flex">*****</div>
          <p className="text-sm">{renderRatingText()}</p>
        </div>

        <div className="flex items-center gap-2 text-reg font-light">
          <p>{<PriceTag price={price} />}</p>
          <span className="h-1 w-1 rounded-full bg-gray-600" />
          <p>{cuisine.name}</p>
          <span className="h-1 w-1 rounded-full bg-gray-600" />
          <p>{location.name}</p>
        </div>
        <div className="mt-8 text-red-500">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard

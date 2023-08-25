import { Time, convertToDisplayTime } from '@/utils/convertToDisplayTime'
import Image from 'next/image'
import { format } from 'date-fns'

const Header = ({
  restaurant,
  searchParams,
}: {
  restaurant: { name: string; main_image: string }
  searchParams: { date: string; partySize: string }
}) => {
  const [day, time] = searchParams.date.split('T')

  return (
    <div>
      <h3 className="font-bold">You&apos;re almost done!</h3>
      <div className="mt-5 flex">
        <Image
          src={restaurant.main_image}
          alt={restaurant.name}
          width={128}
          height={128}
          className="rounded"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <div className="mt-3 flex">
            <p className="mr-6">{format(new Date(day), 'ccc, d LLL')}</p>
            <p className="mr-6">{convertToDisplayTime(time as Time)}</p>
            <p className="mr-6">
              {searchParams.partySize}{' '}
              {searchParams.partySize === '1' ? 'person' : 'people'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

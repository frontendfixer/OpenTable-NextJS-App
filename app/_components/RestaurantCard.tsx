import Image from 'next/image'
import resPic from '@/assets/41710620.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

const RestaurantCard = () => {
  return (
    <div className="max-w-[256px] cursor-pointer overflow-hidden rounded-lg border-2 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Image
        src={resPic}
        alt=""
        style={{
          width: '256px',
          height: '128px',
          objectFit: 'cover',
        }}
      />
      <div className="p-2">
        <h3 className="mb-2 text-2xl font-medium">Russian Vodka Room</h3>
        <div className="item-start flex items-center">
          <div className="mb-2 flex">*****</div>
          <p className="ml-2 text-sm">77 reviews</p>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className="mr-3 ">Russian</p>
          <p className="mr-3">$$$$$</p>
          <p>Kive</p>
        </div>
        <p className="mt-1 flex items-center text-sm font-bold">
          <FontAwesomeIcon icon={faShareFromSquare} className="mr-1 w-5" />
          Booked 3 times today
        </p>
      </div>
    </div>
  )
}

export default RestaurantCard

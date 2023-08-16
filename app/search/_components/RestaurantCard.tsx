import Image from 'next/image'
import Link from 'next/link'
import resPic from '@/assets/41710620.webp'

const RestaurantCard = () => {
  return (
    <div className="mt-5 flex border-b pb-5">
      <Image src={resPic} alt="" className="w-40 rounded" />

      <div className="flex flex-col justify-center pl-5">
        <h2 className="text-3xl font-medium">Aiāna Restaurant Collective</h2>
        <div className="flex items-start">
          <div className="mb-2 flex">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-8">
          <div className="flex text-reg font-light">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/Aiāna">View more information</Link>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard

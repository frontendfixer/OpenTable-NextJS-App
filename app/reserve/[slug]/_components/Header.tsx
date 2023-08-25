import Image from 'next/image'

const Header = ({
  restaurant,
}: {
  restaurant: { name: string; main_image: string }
}) => {
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
            <p className="mr-6">Tues, 22, 2023</p>
            <p className="mr-6">7:30 PM</p>
            <p className="mr-6">3 people</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

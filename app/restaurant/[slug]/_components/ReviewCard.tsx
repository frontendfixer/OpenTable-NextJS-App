import Starts from '@/app/_components/Stars'
import { Review } from '@prisma/client'

const ReviewCard = ({ review }: { review: Review }) => {
  const { first_name, last_name, rating, text } = review
  return (
    <div className="flex items-center justify-start border p-3">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
        <h2 className="text-2xl text-white">
          {first_name.charAt(0).toUpperCase() +
            last_name.charAt(0).toUpperCase()}
        </h2>
      </div>
      <div className="ml-6 flex w-5/6 flex-col items-start">
        <p className="text-xl font-bold">{first_name + ' ' + last_name}</p>
        <Starts rating={rating} reviews={[]} />
        <p className="mt-2 font-light text-gray-600">{text}</p>
      </div>
    </div>
  )
}

export default ReviewCard

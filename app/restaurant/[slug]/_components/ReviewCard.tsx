import Starts from '@/app/_components/Stars'
import { Review } from '@prisma/client'

const ReviewCard = ({ review }: { review: Review }) => {
  const { first_name, last_name, rating, text } = review
  return (
    <div className="flex">
      <div className="flex w-1/6 flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
          <h2 className="text-2xl text-white">
            {first_name.charAt(0).toUpperCase() +
              last_name.charAt(0).toUpperCase()}
          </h2>
        </div>
        <p className="text-center">{first_name + ' ' + last_name}</p>
      </div>
      <div className="ml-10 w-5/6">
        <div className="flex items-center">
          <div className="mb-2 mr-5 flex">
            {<Starts rating={rating} reviews={[]} />}
          </div>
        </div>
        <div className="mt-5">
          <p className="text-lg font-light">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard

import { Review } from '@prisma/client'
import ReviewCard from './ReviewCard'

const ReviewSection = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      <h2 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">
        What {reviews.length}{' '}
        {reviews.length === 1 ? 'person is ' : 'people are'} saying
      </h2>
      <div>
        <div className="mb-7 border-b pb-7">
          {reviews.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewSection

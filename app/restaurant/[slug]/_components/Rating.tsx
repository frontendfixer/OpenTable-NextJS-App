import { calcReviewAverage } from '@/utils/CalculateReviewAverage'
import { Review } from '@prisma/client'

const Rating = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <p>*****</p>
        <p className="ml-3 text-reg">{calcReviewAverage(reviews).toFixed(1)}</p>
      </div>
      <div>
        <p className="ml-4 text-reg">
          {reviews.length} {reviews.length > 1 ? 'Reviews' : 'Review'}
        </p>
      </div>
    </div>
  )
}

export default Rating

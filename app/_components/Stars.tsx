import fullStar from '@/assets/icons/full-star.png'
import halfStar from '@/assets/icons/half-star.png'
import emptyStar from '@/assets/icons/empty-star.png'
import Image from 'next/image'
import { Review } from '@prisma/client'
import { calcReviewAverage } from '@/utils/CalculateReviewAverage'

const Starts = ({ reviews }: { reviews: Review[] }) => {
  const rating = calcReviewAverage(reviews)

  const renderStars = () => {
    const stars = []

    for (let i = 0; i < 5; i++) {
      const diff = parseFloat((rating - i).toFixed(1))
      if (diff >= 1) stars.push(fullStar)
      else if (diff < 1 && diff > 0) {
        if (diff <= 0.2) stars.push(emptyStar)
        else if (diff > 0.2 && diff <= 0.6) stars.push(halfStar)
        else stars.push(fullStar)
      } else stars.push(emptyStar)
    }

    return stars.map((star) => (
      <Image
        src={star}
        width={14}
        height={14}
        alt=""
        aria-hidden
        key={star.src}
      />
    ))
  }
  return <div className=" flex items-center gap-1">{renderStars()}</div>
}

export default Starts

import { Review } from '@prisma/client'

export const calcReviewAverage = (reviews: Review[]) => {
  if (!reviews.length) return 0
  return (
    reviews.reduce((acc, review) => {
      return acc + review.rating
    }, 0) / reviews.length
  )
}
